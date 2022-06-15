import { UseToastOptions } from '@chakra-ui/react'

export const TOAST_OPTIONS: UseToastOptions = {
  title: 'สำเร็จ',
  status: 'success',
  position: 'top-right',
  isClosable: true,
}

export const ERROR_TOAST_OPTIONS: UseToastOptions = {
  position: 'top-right',
  title: 'เกิดข้อผิดพลาด',
  status: 'error',
  duration: 7000,
}
