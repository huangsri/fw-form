import { Box } from '@chakra-ui/react'

type FakePlaceholderProps = {
  label: string
  show: boolean
  children: React.ReactNode
}

export const FakePlaceholder = (props: FakePlaceholderProps) => {
  const { label, show, children } = props

  return (
    <Box
      sx={{
        pos: 'relative',
        _before: {
          content: show ? `"${label}"` : undefined,
          pos: 'absolute',
          color: 'gray.600',
          top: '50%',
          left: '16px',
          transform: 'translateY(-50%)',
          bg: 'white',
          zIndex: 1,
          pointerEvents: 'none',
        },
        _focusWithin: {
          _before: {
            zIndex: -1,
          },
        },
      }}
    >
      {children}
    </Box>
  )
}
