import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import { layerStyles } from './layerStyles'
import { textStyles } from './textStyles'

import components from './components'
import colors from './colors'

const overrideTheme = extendTheme({
  colors,
  components,
  layerStyles,
  textStyles,
  fonts: {
    heading: 'Kanit, sans-serif',
    body: 'sans-serif',
  },
  styles: {
    global: {
      body: {
        bgGradient: 'linear(270deg, brand.50, white)',
      },
      button: {
        fontFamily: 'Kanit, sans-serif',
      },
    },
  },
})

export default overrideTheme

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  return (
    <ChakraProvider resetCSS theme={overrideTheme}>
      <Global
        styles={`
          @font-face {
            font-display: swap;
            font-family: 'Kanit';
            font-style: normal;
            font-weight: 400;
          }

          @font-face {
            font-display: swap;
            font-family: 'Kanit';
            font-style: normal;
            font-weight: 500;
          }

          @font-face {
            font-display: swap;
            font-family: 'Kanit';
            font-style: normal;
            font-weight: 600;
          }
        `}
      />
      {props.children}
    </ChakraProvider>
  )
}
