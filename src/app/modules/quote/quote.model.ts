import { model, Schema } from "mongoose";
import { IQuote, CleaningFrequency } from "./quote.interface";

const QuoteSchema = new Schema<IQuote>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    businessName: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    serviceType: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    cleaningFrequency: {
      type: String,
      required: true,
      enum: ['monthly', 'weekly', 'daily', 'other'] as CleaningFrequency[],
    },
    preferredDateTime: {
      type: Date,
      required: true,
    },
    serviceAddress: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    propertySize: {
      type: Number,
      required: true,
      min: 0,
    },
    additionalNotes: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    cleaner: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['pending', 'paymentMailSended', 'paymentCompleted', 'cleanerAssigned'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export const Quote = model<IQuote>('Quote', QuoteSchema);