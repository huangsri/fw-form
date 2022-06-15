import { Center, Icon, Text, useToast, VStack } from '@chakra-ui/react'
import { Fragment, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaPlusCircle } from 'react-icons/fa'
import { ImFileText2 } from 'react-icons/im'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import { ERROR_TOAST_OPTIONS } from '@/lib/constants/toast'
import { truncateWord } from '../utils'

const _2MB = 2 * 2 ** 20

type FileUploadProps = {
  onChange: (value?: string) => void
  value?: string
}

export const FileUpload = (props: FileUploadProps) => {
  const { onChange, value } = props

  const toast = useToast()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (file.size > _2MB) {
      toast({
        ...ERROR_TOAST_OPTIONS,
        description: 'ขนาดไฟล์ใหญ่เกิน',
      })

      return
    }

    onChange(file.name)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg'],
    },
  })

  return (
    <Center
      sx={{
        border: '1px dashed',
        borderColor: 'gray.500',
        borderRadius: '8px',
        boxSize: '100px',
        cursor: 'pointer',
        pos: 'relative',
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {value ? (
        <Fragment>
          <VStack>
            <Icon
              as={ImFileText2}
              sx={{ fontSize: '20px', color: 'brand.500' }}
            />
            <Text sx={{ fontSize: 'xs', color: 'gray.600' }}>
              {truncateWord(value)}
            </Text>
          </VStack>

          <Icon
            as={IoMdCloseCircleOutline}
            sx={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              color: 'gray.400',
              cursor: 'pointer',
              fontSize: '14px',
            }}
            onClick={(e) => {
              e.stopPropagation()

              onChange(undefined)
            }}
          />
        </Fragment>
      ) : (
        <VStack spacing="0.5" sx={{ pt: 2 }}>
          <Icon
            as={FaPlusCircle}
            sx={{ fontSize: '20px', color: 'brand.500' }}
          />
          <Text sx={{ color: 'gray.800', fontSize: 'sm', textAlign: 'center' }}>
            ตัวอย่างงาน (References) สูงสุด 2MB
          </Text>
        </VStack>
      )}
    </Center>
  )
}
