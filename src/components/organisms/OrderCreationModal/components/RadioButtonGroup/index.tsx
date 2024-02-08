import { Fragment } from 'react'

import { LabeledRadioButton } from 'components/atoms'

import { converterNumberToCurrency } from 'data/formatters'

import S from './styles.module.scss'

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
          <div className={S.container}>
            <LabeledRadioButton
              label={option.name}
              name={optionNameId}
              selectedValue={selectedRadioButtonGroupValue}
              onChange={() => setSelectedRadioButtonGroupValue(option)}
              value={option.id}
            />
            <p className={S.price}>{formattedPrice}</p>
          </div>
          {!lastItem && <hr className="separator-x" />}
        </Fragment>
      )
    })}
  </>
)
