interface ITagButtonProps {
  isChecked: boolean;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export default function TagButton({
  children,
  onClick,
  isChecked,
}: ITagButtonProps) {
  const tagButtonStyle = isChecked
    ? "bg-white text-primary"
    : "text-white bg-dark-opacity";
  return (
    <button
      className={`rounded-tag-button px-[10px] border border-white h-[33px] text-sm font-medium ${tagButtonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
