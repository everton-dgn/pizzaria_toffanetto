export type RadioButtonGroupProps = {
  optionNameId: string
  options: Array<{ id: string; name: string; price: number }>
  selectedRadioButtonGroupValue?: string
  setSelectedRadioButtonGroupValue: (value: any) => void
}
