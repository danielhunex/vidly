import VidlyError from '@Libs/vidlyError';
import mongoose from '@DataAccess';

import { CustomerApiModel, validate } from './customerApiModel';
import {
  Customer,
  CustomerDbModel,
  purgeCustomer,
  queryAll,
  queryCustomerById,
  insertCustomer,
  updateCustomer
} from '../dal';

export const getCustomers = async (): Promise<mongoose.Document[]> => {
  return await queryAll();
};

export const getCustomerById = async (id: string): Promise<CustomerDbModel> => {
  const customer = await queryCustomerById(id);
  if (!customer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return customer;
};

export const postCustomer = async (
  customer: CustomerApiModel
): Promise<CustomerDbModel> => {
  const { error } = validate(customer);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await insertCustomer(new Customer(customer));
};

export const putCustomer = async (
  id: string,
  customer: CustomerApiModel
): Promise<CustomerDbModel> => {
  const { error } = validate(customer);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  const updatedCustomer = await updateCustomer(id, new Customer(customer));

  if (!updatedCustomer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return updatedCustomer;
};

export const deleteCustomer = async (id: string): Promise<CustomerDbModel> => {
  const customer = await purgeCustomer(id);

  if (!customer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return customer;
};
