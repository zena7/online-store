interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
