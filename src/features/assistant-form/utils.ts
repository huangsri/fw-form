import { useMemo } from 'react'
import { COUNTRY_LIST } from './constants'

export const useCountryOptions = () => {
  return useMemo(() => {
    const countryCodeOptions: SelectOption[] = []
    const countryOptions: SelectOption[] = []

    COUNTRY_LIST.forEach(({ country_code, name }) => {
      countryCodeOptions.push({
        value: country_code,
        label: `${name} (${country_code})`,
      })
      countryOptions.push({
        value: name,
        label: name,
      })
    })

    return [countryCodeOptions, countryOptions]
  }, [])
}

export const truncateWord = (str: string) => {
  const length = str.length
  if (length <= 15) return str

  return `${str.substring(0, 7)}....${str.substring(length - 6, length)}`
}
