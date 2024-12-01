import type { Meta, StoryObj } from "@storybook/react";

import TagButton from "../components/TagButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      controls: "text",
      description: "태그 버튼에 표시할 텍스트",
      defaultValue: "",
    },
    isChecked: {
      control: "boolean",
      description: "버튼 선택 여부",
      defaultValue: false,
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TagButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// import deleteIcon from "../assets/ic-delete-dark.svg";
export const Primary: Story = {
  args: {
    children: "Button",
    isChecked: false,
  },
};
