import * as z from "zod"
import type { formSchema } from "./register.schema"

export type FormData = z.infer<typeof formSchema>