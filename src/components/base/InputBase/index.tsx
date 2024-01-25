import { InputHTMLAttributes } from "react"

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export function InputBase({ type, ...othersProps }: IInputProps) {
  return (
    <input
      type={type}
      className="border-none outline-none py-2 px-4 h-14"
      {...othersProps}
    />
  )
}