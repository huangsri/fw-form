import {
  chakra,
  CSSObject,
  Modal as CKModal,
  ModalBody as CKModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps as CKModalProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

type ModalProps = CKModalProps & {
  children: ReactNode
  closeButton?: boolean
  isOpen: boolean
  maxW?: string
  modalContentSx?: CSSObject
  onClose: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    closeButton,
    onClose,
    maxW = '700px',
    modalContentSx,
    children,
    ...rest
  } = props

  return (
    <CKModal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      {...rest}
    >
      <ModalOverlay data-testid="modal-overlay">
        <ModalContent
          maxW={maxW}
          data-testid="modal-content"
          sx={modalContentSx}
        >
          {children}

          {closeButton && <ModalCloseButton data-testid="modal-close-button" />}
        </ModalContent>
      </ModalOverlay>
    </CKModal>
  )
}

export const ModalBody = chakra(CKModalBody, {
  baseStyle: {
    pt: 0,
    pb: 6,
  },
})
