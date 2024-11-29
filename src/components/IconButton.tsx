interface IIconButtonProps {
  iconPath: string;
  alt: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function IconButton({
  iconPath,
  alt,
  onClick,
}: IIconButtonProps) {
  return (
    <button onClick={onClick}>
      <img alt={alt} src={iconPath} />
    </button>
  );
}
