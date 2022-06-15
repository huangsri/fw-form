import { useToast } from '@chakra-ui/react'
import axios, { AxiosError } from 'axios'
import { useMutation } from 'react-query'

import { AssistantFormInput } from '../assistant-form/types'

import { ERROR_TOAST_OPTIONS } from '@/lib/constants/toast'

type Payload = {
  data: AssistantFormInput
}

export const useSubmitAssistantForm = () => {
  const toast = useToast()

  return useMutation<void, AxiosError, Payload>({
    mutationFn: async function ({ data }) {
      await axios.post('/api/submit-assistant-request', data)
    },
    onError() {
      toast({
        ...ERROR_TOAST_OPTIONS,
        description: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
      })
    },
  })
}
