import { Box, Grid, HStack, Link, Stack, Text } from '@chakra-ui/react'

import { Container } from '@/components/shared'

import { contactLinks, pageBottomLinks } from '../constants'

export const PageBottom = () => {
  return (
    <Box sx={{ bg: 'brand.600', color: 'white', pt: 12, pb: '60px' }}>
      <Container>
        <Grid
          sx={{
            gridTemplateColumns: 'repeat(4, 1fr) 1.2fr',
            gap: '48px',
            lineHeight: 2,
          }}
        >
          {pageBottomLinks.map(({ links, title }) => {
            return (
              <Stack key={title} spacing="1">
                <Text textStyle="heading">{title}</Text>

                <Stack spacing="0" sx={{ fontSize: 'sm' }}>
                  {links.map((li) => {
                    return (
                      <Link href={li.href} key={li.label}>
                        {li.label}
                      </Link>
                    )
                  })}
                </Stack>
              </Stack>
            )
          })}

          <Stack spacing="3">
            <Stack spacing="1">
              <Text textStyle="heading">ติดต่อเรา</Text>

              <Stack spacing="0" sx={{ fontSize: 'sm' }}>
                {contactLinks.map(({ label, Icon, href }) => {
                  return (
                    <Link key={label} isExternal href={href}>
                      <HStack>
                        <Icon />

                        <Text>{label}</Text>
                      </HStack>
                    </Link>
                  )
                })}
              </Stack>
            </Stack>

            <Stack sx={{ lineHeight: 'normal', fontSize: '14px' }}>
              <Text>จันทร์-ศุกร์ 9.30 - 22.00 น.</Text>
              <Text>เสาร์ - อาทิตย์, วันหยุดนักขัตฤกษ์ 10.00-19.00 น.</Text>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  )
}
