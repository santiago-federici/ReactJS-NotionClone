import z from 'zod'

const userSchema = z.object({
  username: z.string({
    invalid_type_error: 'Username must be a string',
    required_error: 'Username is required'
  }),
  email: z.string({
    invalid_type_error: 'Email must be a string',
    required_error: 'Email is required'
  }).email({
    message: 'Email must be a valid email'
  }),
  userPassword: z.string({
    invalid_type_error: 'Password must be a string',
    required_error: 'Password is required'
  })
})

export function validateUser (object) {
  return userSchema.safeParse(object)
}

export function validatePartialUser (object) {
  return userSchema.partial().safeParse(object)
}
