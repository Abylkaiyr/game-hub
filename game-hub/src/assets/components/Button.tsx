interface ButtonProps {
  text: string;
  className: string;
}

function Button({ text, className }: ButtonProps) {
  return <button className={className}>{text}</button>;
}

export default Button;
