import mongoose from '@DataAccess';
import Customer, { CustomerType } from './customerDbModel';

export const getAll = async (): Promise<mongoose.Document[]> => {
  return await Customer.find();
};

export const saveCustomer = async (
  customer: CustomerType
): Promise<mongoose.Document> => {
  const newCustomer = new Customer(customer);
  return await newCustomer.save();
};

export const getCustomerById = async (
  id: string
): Promise<mongoose.Document | null> => {
  return await Customer.findById(id);
};

export const updateCustomer = async (
  id: string,
  customer: CustomerType
): Promise<mongoose.Document | null> => {
  return await Customer.findOneAndUpdate(id, customer, { new: true });
};

export const deleteCustomer = async (
  id: string
): Promise<mongoose.Document | null> => {
  return await Customer.findByIdAndDelete(id);
};
