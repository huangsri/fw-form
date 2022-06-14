import { Box, Flex, HStack, Image, Input, Link } from '@chakra-ui/react'

import { navLinks } from '../constants'

export const Navbar = () => {
  return (
    <Box as="nav" sx={{ px: 8, py: 4, pr: 12, bg: 'brand.600' }}>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <HStack spacing="8">
          <Image alt="fastwork logo" src="/images/logo.svg" />

          <Input
            sx={{
              w: '400px',
              bg: 'white',
              borderRadius: 'full',
              fontSize: 'xs',
            }}
            placeholder="จ้างฟรีแลนซ์ทำ..."
          />
        </HStack>

        <HStack spacing="8" sx={{ color: 'white' }} textStyle="heading">
          {navLinks.map(({ href, label }) => {
            return (
              <Link key={label} href={href}>
                {label}
              </Link>
            )
          })}
        </HStack>
      </Flex>
    </Box>
  )
}
