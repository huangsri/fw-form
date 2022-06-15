import { Modal, ModalBody } from '@/components/Modal'
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  UseDisclosureReturn,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

type SuccessModalProps = {
  disclosure: UseDisclosureReturn
}

export const SuccessModal = (props: SuccessModalProps) => {
  const { disclosure } = props
  const { isOpen, onClose } = disclosure

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeButton
      maxW="543px"
      isCentered
    >
      <Box sx={{ p: 4 }}>
        <Text
          as="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 400,
            fontSize: 'lg',
            pb: 4,
          }}
        >
          Personal Assistant Service
        </Text>
        <Divider />
        <ModalBody sx={{ p: 0 }}>
          <Flex sx={{ flexDir: 'column', alignItems: 'center', pt: 24 }}>
            <Icon
              as={FaCheckCircle}
              sx={{ color: '#5FC7A9', fontSize: '60px' }}
            />

            <Text
              textStyle="heading"
              sx={{ mt: 8, fontSize: '2xl', fontWeight: 400 }}
            >
              ส่งข้อมูลเรียบร้อย
            </Text>

            <Text sx={{ mt: 6, fontSize: 'lg', textAlign: 'center' }}>
              ทีมงานจะติดต่อกลับหาคุณ
              เพื่อสอบถามและยืนยันรายละเอียดงานที่ต้องการว่าจ้างฟรีแลนซ์ ภายใน
              24 ช.ม. ระหว่างวันทำการ จันทร์-ศุกร์ เวลา 9.30 - 18.30 น.
            </Text>

            <Button
              colorScheme="brand"
              size="lg"
              sx={{ mt: 24 }}
              onClick={onClose}
            >
              กลับหน้าหลัก
            </Button>
          </Flex>
        </ModalBody>
      </Box>
    </Modal>
  )
}
