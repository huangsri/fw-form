import ReactSelect, { GroupBase, Props } from 'react-select'

import { useThemeConfig } from './useThemeConfig'

export const Select = <
  Option extends SelectOption<string>,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group>
) => {
  const { styles, theme } = useThemeConfig<Option, IsMulti, Group>()

  return (
    <ReactSelect<Option, IsMulti, Group>
      styles={styles}
      theme={theme}
      menuPlacement="auto"
      {...props}
    />
  )
}
