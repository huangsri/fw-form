import { z } from 'zod'

export const assistantFormSchema = z.object({
  requirement: z
    .string()
    .min(20, 'ขั้นต่ำ 20 ตัวอักษร')
    .max(1000, 'ไม่เกิน 1,000 ตัวอักษร'),
  budget: z.string().optional(),
  reference_link: z.string().optional(),
  reference_upload_file_name: z.string().optional(),
  due_date: z.string().min(1, 'จำเป็นต้องเลือก'),
  email: z.string().min(1, 'จำเป็นต้องกรอก').email('รูปแบบของอีเมลไม่ถูกต้อง'),
  phone_number: z.string().min(1, 'จำเป็นต้องกรอก'),
  country: z.string().min(1, 'จำเป็น'),
  country_code: z.string().min(1, 'จำเป็น'),
  line_id: z.string().optional(),
})
