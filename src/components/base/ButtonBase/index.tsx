import { ButtonHTMLAttributes } from "react";

export type IBaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonBase({ children, ...othersProps }: IBaseButtonProps) {
  return (
    <button 
      className="bg-purple-800 p-4 h-14" 
      {...othersProps}
    >
      {children}
    </button>
  )
}
