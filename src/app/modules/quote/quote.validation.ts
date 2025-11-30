import { z } from "zod";

// create quote validation schema
export const createQuoteValidationSchema = z.object({
  body: z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    businessName: z.string().optional(),
    serviceType: z.string().min(1, "Service type is required"),
    cleaningFrequency: z.enum(['monthly', 'weekly', 'daily', 'other']),
    preferredDateTime: z.string().datetime("Invalid date format"),
    serviceAddress: z.string().min(1, "Service address is required"),
    propertySize: z.number().min(1, "Property size must be greater than 0"),
    additionalNotes: z.string().optional(),
  }),
});

// update quote validation schema
export const updateQuoteValidationSchema = z.object({
  body: z.object({
    fullName: z.string().optional(),
    email: z.string().email("Invalid email address").optional(),
    phone: z.string().optional(),
    businessName: z.string().optional(),
    serviceType: z.string().optional(),
    cleaningFrequency: z.enum(['monthly', 'weekly', 'daily', 'other']).optional(),
    preferredDateTime: z.string().datetime("Invalid date format").optional(),
    serviceAddress: z.string().optional(),
    propertySize: z.number().min(1).optional(),
    additionalNotes: z.string().optional(),
    cleaner: z.array(z.string()).optional(),
    status: z.enum(['pending', 'paymentMailSended', 'paymentCompleted', 'cleanerAssigned']).optional(),
  }),
});