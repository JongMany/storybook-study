import type { Meta, StoryObj } from "@storybook/react";

import NavigationBar from "../components/NavigationBar";
import { fn } from "@storybook/test";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
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
    isDark: {
      control: "boolean",
      description: "다크모드 여부",
      defaultValue: false,
    },
    isShowBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    isShowCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true,
    },
    isShowTitle: {
      control: "boolean",
      description: "타이틀 표시 여부",
      defaultValue: true,
    },
    title: { control: "text", description: "타이틀 텍스트", defaultValue: "" },
    onBackButtonClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      action: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
  args: { onBackButtonClick: fn(), onCloseButtonClick: fn() },
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// import deleteIcon from "../assets/ic-delete-dark.svg";
export const Default: Story = {
  args: {
    isDark: true,
    isShowTitle: true,
    title: "네비게이션 바",
    isShowBackButton: true,
    isShowCloseButton: true,
  },
};
