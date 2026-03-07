import { z } from 'zod'

export const applicationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(100, 'Имя слишком длинное'),

  lastName: z
    .string()
    .min(2, 'Фамилия должна содержать минимум 2 символа')
    .max(100, 'Фамилия слишком длинная'),

  email: z
    .string()
    .min(1, 'Email обязателен')
    .email('Некорректный email'),

  phone: z
    .string()
    .min(5, 'Телефон слишком короткий')
    .max(30, 'Телефон слишком длинный'),

  message: z
    .string()
    .min(1, 'Комментарий обязателен')
    .max(2000, 'Комментарий слишком длинный'),

  sourceBlock: z
    .string()
    .max(100, 'Слишком длинный источник заявки')
    .optional()
    .or(z.literal('')),

  isPrivacyAccepted: z.literal(true, {
    message: 'Необходимо согласие на обработку персональных данных',
  }),

  company: z
    .string()
    .max(0, 'Спам-поле должно быть пустым')
    .optional()
    .or(z.literal('')),
})

export type ApplicationInput = z.infer<typeof applicationSchema>