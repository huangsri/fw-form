import { useTheme } from '@chakra-ui/react'
import { StylesConfig, Theme, GroupBase } from 'react-select'

export const useThemeConfig = <
  Option extends SelectOption<string>,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>() => {
  const { colors } = useTheme()

  const customStyles: StylesConfig<Option, IsMulti, Group> = {
    container: (provided) => {
      return {
        ...provided,
        height: '40px',
        borderRadius: '8px',
      }
    },
    control: (provided, state) => {
      const borderColor = state.isFocused ? colors.brand[400] : colors.gray[200]

      return {
        ...provided,
        height: '100%',
        borderColor: borderColor,
        boxShadow: 'none',
        ...(state.isFocused && {
          boxShadow: `0 0 0 1px #3182ce;`,
        }),

        '&:hover': {
          borderColor: borderColor,
        },
      }
    },
    indicatorsContainer(provided) {
      return {
        ...provided,
      }
    },
    indicatorSeparator: () => {
      return {}
    },
    input: (provided) => {
      return {
        ...provided,
        marginLeft: '6px',
      }
    },
    option(provided, state) {
      return {
        ...provided,
        '.option-description': {
          ...(state.isSelected && {
            color: 'white',
          }),
        },
      }
    },
    multiValue(provided) {
      return {
        ...provided,
        backgroundColor: colors.brand[400],
        borderRadius: '16px',
      }
    },
    multiValueLabel(provided) {
      return {
        ...provided,
        color: 'white',
        paddingLeft: '12px',
      }
    },
    multiValueRemove(provided) {
      return {
        ...provided,
        color: 'white',
        borderRadius: '0 16px 16px 0',
        cursor: 'pointer',

        ':hover': {
          color: 'white',
          backgroundColor: colors.brand[400],
        },
      }
    },
    placeholder: (provided) => {
      return {
        ...provided,
        marginLeft: '6px',
      }
    },
    singleValue: (provided) => {
      return {
        ...provided,
        marginLeft: '6px',
      }
    },
    valueContainer: (provided) => {
      return {
        ...provided,
        height: '100%',
        paddingTop: 3,
        paddingBottom: 3,
      }
    },
    menu: (provided) => {
      return {
        ...provided,
        width: 'max-content',
        minWidth: '100%',
      }
    },
  }

  const selectTheme = (theme: Theme) => {
    return {
      ...theme,
      borderRadius: 4,
      colors: {
        ...theme.colors,
        primary: colors.brand[400],
        primary25: colors.brand[50],
        primary50: colors.brand[100],
        primary75: colors.brand[200],
      },
      spacing: {
        ...theme.spacing,
        controlHeight: 40,
      },
    }
  }

  return {
    styles: customStyles,
    theme: selectTheme,
  }
}
