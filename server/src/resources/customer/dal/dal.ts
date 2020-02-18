import mongoose from '@DataAccess';
import { Customer, CustomerDocument, CustomerDbModel } from './customerDbModel';
import VidlyError from '@Libs/vidlyError';

export const queryCustomers = async (): Promise<mongoose.Document[]> => {
  return await Customer.find();
};

export const insertCustomer = async (
  customer: CustomerDbModel
): Promise<CustomerDocument> => {
  const newCustomer = new Customer(customer);
  return await newCustomer.save();
};

export const queryCustomerById = async (
  id: string
): Promise<CustomerDocument | null> => {
  return await Customer.findById(id);
};

export const updateCustomer = async (
  id: string,
  customer: CustomerDbModel
): Promise<CustomerDocument> => {
  const customerDoc = await Customer.findById(id);

  if (!customerDoc) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }

  customerDoc.name = customer.name;
  customerDoc.isGold = customer.isGold;
  customerDoc.phone = customer.phone;
  return await customerDoc.save();
};

export const updateCustomerPartial = async (
  id: string,
  customer: CustomerDbModel
): Promise<CustomerDocument> => {
  //TODO: patch data validation should be done
  const customerDoc = await Customer.findById(id);

  if (!customerDoc) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  customerDoc.set(customer);

  return await customerDoc.save();
};

export const purgeCustomer = async (
  id: string
): Promise<CustomerDocument | null> => {
  return await Customer.findByIdAndDelete(id);
};
