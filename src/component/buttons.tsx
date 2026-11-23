import type { ReactNode } from "react";

interface ButtonProps {
  content: string;
  id?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonProps2 {
  content2: ReactNode;
  id?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  content,
  id,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`border border-gray-300 h-[55px] p-[.5em] aspect-square rounded-full ${className || ""}`}
      disabled={disabled}
    >
      <img src={content} className="w-[1.7em] h-[1.7em] mx-auto"></img>
    </button>
  );
}

export function Button2({
  content,
  id,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`menu-links py-[1rem] px-[2.75em] ${className || ""}`}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export function Button3({
  content2,
  id,
  className,
  onClick,
  disabled,
}: ButtonProps2) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`border border-gray-300 h-[55px] p-[.5em] aspect-square rounded-full ${className || ""}`}
      disabled={disabled}
    >
      {content2}
    </button>
  );
}
