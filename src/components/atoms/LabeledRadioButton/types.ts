export type LabeledRadioButtonProps = {
  name?: string
  label?: string
  value: string | number
  selectedValue: string | number | boolean | null | undefined
  onChange: (value: any) => void
  disabled?: boolean
}
