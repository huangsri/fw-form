import {
  Center,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import { FaInfoCircle } from 'react-icons/fa'

import { Strong } from '@/components/shared'

export const FormPolicy = () => {
  return (
    <HStack layerStyle="card" sx={{ p: 4, alignItems: 'flex-start' }}>
      <Center sx={{ boxSize: '32px', flexShrink: 0 }}>
        <Icon as={FaInfoCircle} sx={{ fontSize: '22px', color: 'brand.500' }} />
      </Center>

      <Stack spacing="3" divider={<StackDivider />}>
        <Text>
          หากคุณเป็นฟรีแลนซ์ชาวไทยที่ต้องการลงงาน คุณสามารถ สมัครเป็นฟรีแลนซ์
          เพื่อลงงานของคุณได้เลย
        </Text>

        <Text>
          <Strong>For non-Thai citizen Freelancer</Strong>, see more information
          here regarding our registration policy.
        </Text>
      </Stack>
    </HStack>
  )
}
