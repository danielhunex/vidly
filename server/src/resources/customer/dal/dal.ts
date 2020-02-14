import mongoose from '@DataAccess';
import { Customer, CustomerDbModel } from './customerDbModel';

export const queryAll = async (): Promise<mongoose.Document[]> => {
  return await Customer.find();
};

export const insertCustomer = async (
  customer: CustomerDbModel
): Promise<CustomerDbModel> => {
  const newCustomer = new Customer(customer);
  return await newCustomer.save();
};

export const queryCustomerById = async (
  id: string
): Promise<CustomerDbModel | null> => {
  return await Customer.findById(id);
};

export const updateCustomer = async (
  id: string,
  customer: CustomerDbModel
): Promise<CustomerDbModel | null> => {
  return await Customer.findOneAndUpdate(id, customer, { new: true });
};

export const purgeCustomer = async (
  id: string
): Promise<CustomerDbModel | null> => {
  return await Customer.findByIdAndDelete(id);
};
