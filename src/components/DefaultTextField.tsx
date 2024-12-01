import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";

interface IDefaultTextFieldProps {
  id: string;
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
}

export default function DefaultTextField({
  id,
  errorMessage,
  iconAlt,
  iconPath,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? "border-secondary"
    : !value
    ? "border-mono300"
    : "border-primary";

  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {value.length > 0 && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
