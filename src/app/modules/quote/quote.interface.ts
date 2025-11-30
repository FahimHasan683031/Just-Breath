import { Types } from 'mongoose';

export type CleaningFrequency = 
  | 'monthly'
  | 'weekly'
  | 'daily'
  | 'other';

export type IQuote = {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  phone: string;
  businessName?: string;
  serviceType: Types.ObjectId;
  cleaningFrequency: CleaningFrequency;
  preferredDateTime: Date;
  serviceAddress: string;
  propertySize: number;
  additionalNotes?: string;
  status: 'pending' | 'paymentMailSended' | 'paymentCompleted' | 'cleanerAssigned';
  cleaner?:string[];
  createdAt: Date;
  updatedAt: Date;
};