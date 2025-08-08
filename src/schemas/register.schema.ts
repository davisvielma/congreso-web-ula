import * as z from 'zod'

export const formSchema = z.object({
  name: z.string().min(4, 'El nombre debe tener al menos 4 caracteres'),
  email: z.string().regex(/^[^@]+@[^@]+\.[^@]+$/, 'Ingresa un email válido'),
  ticketType: z.enum(['estudiante', 'profesional', 'empresa'], 'Selecciona un tipo de ticket'),
})
