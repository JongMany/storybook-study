import { flexColCenter } from "../mixins/styles";

interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryButton({
  iconAlt,
  text,
  onClick,
  iconPath,
}: ICategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-default border border-primary text-primary text-base font-bold pl-[22px] pr-[21px] py-4 ${flexColCenter}`}
    >
      <img alt={iconAlt} src={iconPath} />
      <p>{text}</p>
    </button>
  );
}
