import React from "react";

type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButton {
  disabled: boolean;
  children: string;
  theme: PrimaryButtonTheme;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledButtonStyle = "disabled:bg-mono100 disabled:text-mono200";

const themeColor: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  text,
};

export default function PrimaryButton({
  children,
  onClick,
  theme,
  disabled,
}: IPrimaryButton) {
  return (
    <button
      className={`w-full h-[59px] ${themeColor[theme]} ${disabledButtonStyle} rounded-default `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
