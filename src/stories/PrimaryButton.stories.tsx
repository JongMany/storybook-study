import type { Meta, StoryObj } from "@storybook/react";

import PrimaryButton from "../components/PrimaryButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "버튼",
    },
    theme: {
      control: "select",
      options: ["dark", "light", "social", "text"],
      description: "버튼 테마",
      defaultValue: "dark",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: true,
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// import deleteIcon from "../assets/ic-delete-dark.svg";
export const Dark: Story = {
  args: {
    children: "Button",
    theme: "dark",
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    theme: "light",
    disabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    theme: "social",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "light",
    disabled: true,
  },
};
