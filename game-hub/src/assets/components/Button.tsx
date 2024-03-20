interface ButtonProps {
  className: string;
  children: string;
  onClick: () => void;
}

function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button className={"btn " + className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
