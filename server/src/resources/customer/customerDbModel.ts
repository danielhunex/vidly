import mongoose from '@DataAccess';

export interface CustomerType extends mongoose.Document {
  name: string;
  isGold: boolean;
  phone: string;
}
const schema = new mongoose.Schema({
  isGold: { type: Boolean, default: false },
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  phone: { type: String, required: true, minlength: 10, maxlength: 13 }
});
const Customer = mongoose.model<CustomerType>('Customer', schema);
export default Customer;
