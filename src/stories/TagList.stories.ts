import type { Meta, StoryObj } from "@storybook/react";

import TagList from "../components/TagList";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: "object", // array
      description: "태그 리스트",
      defaultValue: [],
    },
    onTagClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { onTagClick: fn() },
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

// import deleteIcon from "../assets/ic-delete-dark.svg";
export const Primary: Story = {
  args: {
    tagList: ["Tag 1", "Tag 2", "Tag 3"],
  },
};
