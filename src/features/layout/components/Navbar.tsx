import { Box, Flex, HStack, Image, Input, Link } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { navLinks } from '../constants'

export const Navbar = () => {
  const { register, handleSubmit } = useForm<{ query: string }>()

  return (
    <Box as="nav" sx={{ px: 8, py: 4, pr: 12, bg: 'brand.600' }}>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <HStack spacing="8">
          <Image alt="fastwork logo" src="/logo.svg" />

          <form
            onSubmit={handleSubmit((data) => {
              if (!data.query) return

              window.open(
                `https://staging.fastwork.co/search?q=${data.query}`,
                '_blank'
              )
            })}
          >
            <Input
              sx={{
                w: '400px',
                bg: 'white',
                borderRadius: 'full',
                fontSize: 'xs',
                _placeholder: {
                  color: 'gray.800',
                },
              }}
              placeholder="จ้างฟรีแลนซ์ทำ..."
              {...register('query')}
            />
          </form>
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
