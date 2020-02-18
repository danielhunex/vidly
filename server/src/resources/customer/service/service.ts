import VidlyError from '@Libs/vidlyError';
import mongoose from '@DataAccess';

import { CustomerApiModel, validate } from './customerApiModel';
import {
  Customer,
  CustomerDocument,
  purgeCustomer,
  queryCustomers,
  queryCustomerById,
  insertCustomer,
  updateCustomer,
  updateCustomerPartial
} from '../dal';

export const getCustomers = async (): Promise<mongoose.Document[]> => {
  return await queryCustomers();
};

export const getCustomerById = async (
  id: string
): Promise<CustomerDocument> => {
  const customer = await queryCustomerById(id);
  if (!customer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return customer;
};

export const postCustomer = async (
  customer: CustomerApiModel
): Promise<CustomerDocument> => {
  const { error } = validate(customer);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await insertCustomer(customer);
};

export const putCustomer = async (
  id: string,
  customer: CustomerApiModel
): Promise<CustomerDocument> => {
  const { error } = validate(customer);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await updateCustomer(id, new Customer(customer));
};

export const patchCustomer = async (
  id: string,
  customer: CustomerApiModel
): Promise<CustomerDocument> => {
  //validate for patch
  return await updateCustomerPartial(id, customer);
};

export const deleteCustomer = async (id: string): Promise<CustomerDocument> => {
  const customer = await purgeCustomer(id);

  if (!customer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return customer;
};
