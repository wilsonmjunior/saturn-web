import { FormHTMLAttributes } from "react";

import { SubmitButton } from "./SubmitButton";

export type IFormProps = FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...othersProps }: IFormProps) {
  return (
    <form 
      className="p-6 border border-gray-20 rounded-lg shadow"
      {...othersProps}
    >
      <SubmitButton />
    </form>
  )
}
