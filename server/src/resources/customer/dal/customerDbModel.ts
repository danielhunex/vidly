import mongoose from '@DataAccess';

export interface CustomerDbModel extends mongoose.Document {
  name: string;
  isGold: boolean;
  phone: string;
}

const schemaDefinition = {
  isGold: { type: Boolean, default: false },
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  phone: { type: String, required: true, minlength: 10, maxlength: 13 }
};
const schema = new mongoose.Schema(schemaDefinition);
export const Customer = mongoose.model<CustomerDbModel>('Customer', schema);
