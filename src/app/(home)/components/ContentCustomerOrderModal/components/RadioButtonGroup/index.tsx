import { Fragment } from 'react'

import { LabeledRadioButton } from 'components/atoms'

import { converterNumberToCurrency } from 'data/formatters'

import type { RadioButtonGroupProps } from './types'

export const RadioButtonGroup = ({
  options,
  optionNameId,
  selectedRadioButtonGroupValue,
  setSelectedRadioButtonGroupValue
}: RadioButtonGroupProps) => (
  <>
    {options.map((option, i) => {
      const lastItem = i === options.length - 1
      const formattedPrice = converterNumberToCurrency({
        value: option.price,
        setsCurrencySymbol: true
      })
      return (
        <Fragment key={option.id}>
          <div className="ai-start f-nowrap g-4 jc-between row">
            <LabeledRadioButton
              label={option.name}
              name={optionNameId}
              selectedValue={selectedRadioButtonGroupValue}
              onChange={() => setSelectedRadioButtonGroupValue(option)}
              value={option.id}
            />
            <p className="whitespace-nowrap fs-sm-semibold-dark">
              {formattedPrice}
            </p>
          </div>
          {!lastItem && <hr className="hr-x" />}
        </Fragment>
      )
    })}
  </>
)
