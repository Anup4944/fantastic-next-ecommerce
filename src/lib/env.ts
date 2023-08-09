import zod from "zod"

// Validation schema for environment variables


const envSchema = zod.object({
    MONGO_CLIENT:zod.string().nonempty(),
    GOOGLE_CLIENT_ID:zod.string().nonempty(),
    GOOGLE_CLIENT_SECRET: zod.string().nonempty(),
    NEXTAUTH_URL: zod.string().nonempty(),
    NEXTAUTH_SECRET:zod.string().nonempty(),
}) 

export const env= envSchema.parse(process.env)