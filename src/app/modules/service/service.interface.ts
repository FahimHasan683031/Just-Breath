import { Types } from 'mongoose';

export type IService = {
  _id: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  image?: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};