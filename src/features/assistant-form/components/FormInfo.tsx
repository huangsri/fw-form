import { Box, Grid, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { MdOutlineCheck } from 'react-icons/md'

export const FormInfo = () => {
  return (
    <Box>
      <Stack spacing="1" textStyle="heading">
        <Text sx={{ fontSize: '24px' }}>Personal Assistant Service</Text>
        <Text sx={{ fontSize: '32px', color: 'brand.600' }}>
          เราหาฟรีแลนซ์ให้...แค่อึดใจเดียว
        </Text>
      </Stack>

      <Grid
        sx={{
          mt: 5,
          gridTemplateColumns: 'repeat(2, max-content)',
          gap: '8px 32px',
          mb: 12,
        }}
      >
        {features.map((feat) => {
          return <FeatureItem key={feat} title={feat} />
        })}
      </Grid>

      <Image
        src="/images/form-image.png"
        alt="personal assistant service"
        sx={{ pos: 'sticky', top: '60px', mt: 12 }}
      />
    </Box>
  )
}

const features = [
  'คุมงบได้เอง',
  'ตอบเร็วแน่นอน',
  'มีผู้ช่วยดูแลจนจบงาน',
  'การันตีคุณภาพ',
]

type FeatureItemProps = {
  title: string
}

const FeatureItem = (props: FeatureItemProps) => {
  const { title } = props

  return (
    <HStack>
      <Icon as={MdOutlineCheck} sx={{ color: '#5ED016', fontSize: '14px' }} />
      <Text sx={{ color: 'gray.800' }}>{title}</Text>
    </HStack>
  )
}
