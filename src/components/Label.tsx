interface ILabelProps {
  htmlFor: string;
  children: string;
}
export function Label({ htmlFor, children }: ILabelProps) {
  return (
    <label className="text-sm text-primary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
