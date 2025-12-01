import { Schema, model } from 'mongoose'
import { ContactModel,  IContact,  IPublic, PublicModel } from './public.interface'

const publicSchema = new Schema<IPublic, PublicModel>(
  {
    content: { type: String },
    type: { type: String, enum: ['privacy-policy', 'terms-and-condition','contact','about'] },
  },
  {
    timestamps: true,
  },
)

export const Public = model<IPublic, PublicModel>('Public', publicSchema)



const contactSchema = new Schema<IContact, ContactModel>(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String, optional: true },
    message: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  },
)

export const Contact = model<IContact, ContactModel>('Contact', contactSchema)