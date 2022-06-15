import { isEmpty } from 'lodash'

export const optionsToValues = <T = string>(options: SelectOption<T>[]) => {
  if (!options && isEmpty(options)) {
    return []
  }

  const groupIdValues = options.map((option) => option.value)

  return groupIdValues
}

export const valuesToOptions = <T extends {}>(
  values: T[],
  options: SelectOption<T>[]
) => {
  if (isEmpty(options) || isEmpty(values)) {
    return []
  }

  const fieldOptions = options.filter((option) => {
    return values.includes(option.value)
  })

  return fieldOptions
}

export const valueToOption = <T extends SelectOption>(
  value: T['value'],
  options: T[]
): T | undefined => {
  const optionValue = options.find((option) => option.value === value)

  return optionValue
}
