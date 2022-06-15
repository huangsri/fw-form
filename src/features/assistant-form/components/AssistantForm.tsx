import {
  Box,
  Button,
  Checkbox,
  Grid,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormControl } from '@/components/form'
import { FileUpload } from './FileUpload'
import { Select } from '@/components/Select'
import { FakePlaceholder } from './FakePlaceholder'

import { AssistantFormInput } from '../types'
import { assistantFormSchema } from '../schema'
import { COUNTRY_LIST } from '../constants'

import { useCountryOptions } from '../utils'
import { useNonInitialEffect } from '@/lib/hooks'
import { valueToOption } from '@/components/Select/utils'

type AssistantFormProps = {
  onSubmitForm: (data: AssistantFormInput) => void
  isLoading: boolean
}

export const AssistantForm = (props: AssistantFormProps) => {
  const { onSubmitForm, isLoading } = props

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    watch,
    setValue,
  } = useForm<AssistantFormInput>({
    defaultValues: {
      country_code: '+66',
      country: 'Thailand',
    },
    resolver: zodResolver(assistantFormSchema),
  })

  const isAcceptTerms = watch('accept_terms')
  const isAcceptNewsletter = watch('newsletter')

  const countryCode = watch('country_code')
  const fileName = watch('reference_upload_file_name')

  const dueDate = watch('due_date')

  const [countryCodeOptions, countryOptions] = useCountryOptions()

  useNonInitialEffect(() => {
    const newCountry = COUNTRY_LIST.find(
      (opt) => opt.country_code === countryCode
    )

    if (!newCountry) return

    setValue('country', newCountry.name)
  }, [countryCode])

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmitForm(data)
      })}
    >
      <Box
        layerStyle="card"
        sx={{
          p: 10,
        }}
      >
        <VStack spacing="1px">
          <Text as="h3" textStyle="heading" sx={{ fontSize: '24px' }}>
            กรอกรายละเอียดที่คุณต้องการ
          </Text>
          <Text>เฉพาะลูกค้าที่ต้องการจ้างงานเท่านั้น</Text>
        </VStack>

        <Box sx={{ mt: 10 }}>
          <Text textStyle="heading">รายละเอียดของงาน</Text>
          <Stack spacing="6" sx={{ mt: 4 }}>
            <Grid
              sx={{
                gridTemplateColumns: '1fr 100px',
                gap: '4',
              }}
            >
              <FormControl errorMsg={errors.requirement?.message}>
                <Textarea
                  placeholder="รายละเอียดของงาน (Project Details)"
                  sx={{ resize: 'none', minH: '100px' }}
                  {...register('requirement')}
                />
              </FormControl>

              <Box>
                <FileUpload
                  value={fileName}
                  onChange={(value) => {
                    setValue('reference_upload_file_name', value)
                  }}
                />
              </Box>
            </Grid>

            <FormControl>
              <Input
                placeholder="ลิ้งค์ตัวอย่างผลงาน"
                {...register('reference_link')}
              />
            </FormControl>

            <Grid sx={{ gridTemplateColumns: '1fr 1fr', gap: '4' }}>
              <FormControl>
                <Input
                  placeholder="ราคางานที่ตั้งไว้ (Budget)"
                  type="number"
                  inputMode="numeric"
                  {...register('budget')}
                />
              </FormControl>

              <FormControl errorMsg={errors.due_date?.message}>
                <FakePlaceholder label="วันที่ต้องการรับงาน" show={!dueDate}>
                  <Input type="date" {...register('due_date')} />
                </FakePlaceholder>
              </FormControl>
            </Grid>
          </Stack>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Text textStyle="heading">ข้อมูลติดต่อกลับ</Text>
          <Stack spacing="6" sx={{ mt: 4 }}>
            <FormControl errorMsg={errors.email?.message}>
              <Input
                type="email"
                placeholder="อีเมล (E-mail)"
                {...register('email')}
              />
            </FormControl>

            <Grid sx={{ gridTemplateColumns: '100px 1fr', gap: '4' }}>
              <Controller
                control={control}
                name="country_code"
                render={({ field: { value, onChange, name } }) => {
                  const selectValue = valueToOption(value, countryCodeOptions)

                  return (
                    <Select
                      name={name}
                      options={countryCodeOptions}
                      value={selectValue}
                      onChange={(option) => onChange(option?.value)}
                      formatOptionLabel={(option, { context }) => {
                        return context === 'menu' ? option.label : option.value
                      }}
                      id="country-code"
                    />
                  )
                }}
              />

              <FormControl errorMsg={errors.phone_number?.message}>
                <Input
                  placeholder="Phone number"
                  {...register('phone_number')}
                />
              </FormControl>
            </Grid>

            <FormControl>
              <Controller
                control={control}
                name="country"
                render={({ field: { value, onChange, name } }) => {
                  const selectValue = valueToOption(value, countryOptions)

                  return (
                    <Select
                      name={name}
                      options={countryOptions}
                      value={selectValue}
                      onChange={(option) => onChange(option?.value)}
                      id="country"
                    />
                  )
                }}
              />
            </FormControl>

            <FormControl>
              <Input placeholder="LINE ID" {...register('line_id')} />
            </FormControl>
          </Stack>
        </Box>

        <Stack spacing="11px" sx={{ mt: '26px', color: 'gray.800' }}>
          <Checkbox
            size="sm"
            colorScheme="brand"
            isRequired
            {...register('accept_terms')}
          >
            ฉันได้อ่านและยอมรับ&nbsp;
            <Link
              sx={{ color: 'brand.500' }}
              isExternal
              href="https://fastwork.co/privacy"
            >
              นโยบายคุ้มครองความเป็นส่วนตัว
            </Link>
            *
          </Checkbox>
          <Checkbox
            size="sm"
            colorScheme="brand"
            isRequired
            {...register('newsletter')}
          >
            ฉันสนใจรับข้อมูลข่าวสาร ส่วนลด และโปรโมชันจาก Fastwork
          </Checkbox>
        </Stack>

        <VStack spacing="3" sx={{ mt: '25px' }}>
          <Button
            colorScheme="brand"
            sx={{ w: '180px', mx: 'auto' }}
            type="submit"
            isDisabled={!isAcceptTerms || !isAcceptNewsletter}
            isLoading={isLoading}
          >
            ส่งรายละเอียด
          </Button>

          <Text sx={{ color: 'gray.700' }}>
            ทีมงานจะติดต่อกลับอย่างเร็วที่สุด
          </Text>
        </VStack>
      </Box>
    </form>
  )
}
