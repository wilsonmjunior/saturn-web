import { ButtonBase, IBaseButtonProps } from "@/components/base";

type IButtonProps = IBaseButtonProps & {
  label: string;
}

export function Button({ label, ...othersProps }: IButtonProps) {
  return (
    <ButtonBase {...othersProps}>{label}</ButtonBase>
  )
}