import z from 'zod'

const pageSchema = z.object({
  title: z.string({
    invalid_type_error: 'Username must be a string'
  }).default('Untitled'),
  parent_page_id: z.number().int().positive(),
  icon: z.string({
    invalid_type_error: 'Username must be a string'
  }).default('EmptyPage')
})

export function validatePage (object) {
  return pageSchema.safeParse(object)
}

export function validatePartialPage (object) {
  return pageSchema.partial().safeParse(object)
}
