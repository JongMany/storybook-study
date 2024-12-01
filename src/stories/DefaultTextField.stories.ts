import type { Meta, StoryObj } from "@storybook/react";

import DefaultTextField from "../components/DefaultTextField";
import { fn } from "@storybook/test";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "텍스트 필드의 id",
      defaultValue: "",
    },
    iconAlt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 Placeholder",
      defaultValue: "텍스트를 입력해주세요",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "텍스트 필드의 에러 여부",
      defaultValue: false,
    },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메세지",
      defaultValue: "",
    },
    onChange: {
      action: "changed",
      description: "텍스트 필드의 값 변경 이벤트 핸들러 함수",
    },
    onIconClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: { onIconClick: fn(), onChange: fn() },
} satisfies Meta<typeof DefaultTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

// import deleteIcon from "../assets/ic-delete-dark.svg";
export const Default: Story = {
  args: {
    id: "",
    iconAlt: "icon",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    isError: false,
  },
};
