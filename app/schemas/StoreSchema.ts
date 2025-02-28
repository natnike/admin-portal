import { z } from "zod"

export const storeSchema = z.object({
    id: z.coerce.number().positive(),   
    description: z.string().min(2, { message: "Must be 2 or more characters long" }),
    city: z.string().min(1, "City is required"),
    state: z.string().min(2, { message: "Must be 2 or more characters long" }),
    zip: z.string().min(2, { message: "Must be 2 or more characters long" }),
    phoneNumber: z.string().min(2, { message: "Must be 2 or more characters long" }),
    isOnlineReservation: z.boolean(),
    isTemporarilyClosed: z.boolean(),
    isOnlineOrder: z.boolean(),
})

export type StoreSchema = z.infer<typeof storeSchema>