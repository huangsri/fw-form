import {
  Collapse,
  FormControl as CKFormControl,
  FormControlProps as CKFormControlProps,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'

type FormControlProps = CKFormControlProps & {
  label?: string
  helperText?: string
  errorMsg?: string
}

export const FormControl = (props: FormControlProps) => {
  const { label, children, isInvalid: _isInvalid, errorMsg, ...rest } = props

  const isInvalid = Boolean(errorMsg)

  return (
    <CKFormControl isInvalid={isInvalid} {...rest}>
      {label && <FormLabel>{label}</FormLabel>}
      {children}

      <Collapse in={isInvalid} animateOpacity>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </Collapse>
    </CKFormControl>
  )
}
