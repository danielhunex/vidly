import mongoose from '@DataAccess';

export interface CustomerDbModel {
  name?: string;
  isGold?: boolean;
  phone?: string;
}
export interface CustomerDocument extends CustomerDbModel, mongoose.Document {}

const schemaDefinition = {
  isGold: { type: Boolean, default: false },
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  phone: { type: String, required: true, minlength: 10, maxlength: 13 }
};
const schema = new mongoose.Schema(schemaDefinition);
export const Customer =
  mongoose.models.Customers ||
  mongoose.model<CustomerDocument>('Customers', schema);
