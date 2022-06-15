import { z } from 'zod'

import { assistantFormSchema } from './schema'

export type AssistantFormInput = z.infer<typeof assistantFormSchema> & {
  accept_terms: boolean
  newsletter: boolean
}
