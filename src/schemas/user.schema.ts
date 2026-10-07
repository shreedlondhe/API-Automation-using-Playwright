import { z } from 'zod';

export const CreateUserResponseSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    user: z.object({
        id: z.number(),
        name: z.string(),
        age: z.number(),
        city: z.string()
    })
});


export const DeleteUserResponseSchema = z.object({
    message: z.string(),
    user: z.object({
        id: z.number(),
        name: z.string(),
        age: z.number(),
        city: z.string()
    })
});