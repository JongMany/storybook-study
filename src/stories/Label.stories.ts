import type { Meta, StoryObj } from "@storybook/react";

import Label from "../components/Label";

const meta = {
  title: "Text/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "Label의 for 속성" },
    children: { control: "text", description: "Label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    htmlFor: "username",
    children: "Email",
  },
};
