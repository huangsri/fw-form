import { Grid, Stack, useDisclosure } from '@chakra-ui/react'
import { Fragment } from 'react'

import {
  AssistantForm,
  FormInfo,
  FormPolicy,
  SuccessModal,
} from '../components'
import { Container } from '@/components/shared'

import { useSubmitAssistantForm } from '@/features/services'

export const FormContainer = () => {
  const disclosure = useDisclosure()

  const { mutate: submitForm, isLoading } = useSubmitAssistantForm()

  return (
    <Fragment>
      <Container>
        <Grid
          sx={{
            gridTemplateColumns: '1fr 592px',
            gap: '80px',
            pt: '72px',
            pb: '56px',
          }}
        >
          <FormInfo />

          <Stack spacing="4">
            <AssistantForm
              isLoading={isLoading}
              onSubmitForm={(data) => {
                submitForm(
                  { data },
                  {
                    onSuccess() {
                      disclosure.onOpen()
                    },
                  }
                )
              }}
            />

            <FormPolicy />
          </Stack>
        </Grid>
      </Container>

      <SuccessModal disclosure={disclosure} />
    </Fragment>
  )
}
