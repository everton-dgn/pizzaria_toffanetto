export type LabeledRadioButtonProps = {
  name?: string
  label?: string
  value: string | number
  selectedValue: string | number | boolean | null | undefined
  setSelectedValue: (value: any) => void
  disabled?: boolean
}
