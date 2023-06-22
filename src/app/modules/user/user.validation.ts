import { z } from 'zod';

//req- validation
//body -->object
//data -->object
const createUserSchemaZod = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
});

export const userValidation = {
  createUserSchemaZod,
};
