import { z } from "zod";

// create service validation schema
export const createServiceValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Service title is required"),
    description: z.string().min(1, "Service description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    image: z.string()
  }),
});

// update service validation schema
export const updateServiceValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    price: z.number().min(0).optional(),
    image: z.string().optional(),
    status: z.boolean().optional(),
  }),
});