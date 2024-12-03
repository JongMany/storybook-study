// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within, expect, fn } from "@storybook/test";

import LoginForm from "../components/LoginForm";

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: "Forms/LoginForm",
  parameters: {
    layout: "centered",
  },
  args: {
    // 👇 Use `fn` to spy on the onSubmit arg
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    await expect(emailInput).toBeInTheDocument();
    const passwordInput = canvas.getByTestId("password");
    await expect(passwordInput).toBeInTheDocument();

    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(loginButton).toBeDisabled();
  },
};
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    const passwordInput = canvas.getByTestId("password");

    await step("Enter credentials", async () => {
      await userEvent.type(emailInput, "test@email.com");
      await userEvent.type(passwordInput, "supersecret");
    });

    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(loginButton).toBeEnabled();
  },
};
