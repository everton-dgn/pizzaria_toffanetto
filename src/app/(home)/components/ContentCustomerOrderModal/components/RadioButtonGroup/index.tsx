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
          <div className="flex-nowrap jc-between ai-start row g-16">
            <LabeledRadioButton
              label={option.name}
              name={optionNameId}
              selectedValue={selectedRadioButtonGroupValue}
              onChange={() => setSelectedRadioButtonGroupValue(option)}
              value={option.id}
            />
            <p className="whitespace-nowrap text-14 font-600 text-dark">
              {formattedPrice}
            </p>
          </div>
          {!lastItem && <hr className="separator-x" />}
        </Fragment>
      )
    })}
  </>
)
