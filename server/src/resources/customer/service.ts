import * as dal from './dal';
import Joi from '@hapi/joi';
import VidlyError from '@Libs/vidlyError';
import mongoose from '@DataAccess';
import Customer from './customerDbModel';

interface CustomerModelType {
  name: string;
  phone: string;
  isGold: boolean;
}
const validate = (customer: object): Joi.ValidationResult => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required(),
    isGold: Joi.bool(),
    phone: Joi.string()
      .min(10)
      .max(13)
      .required()
  });
  return schema.validate(customer);
};

export const getCustomers = async (): Promise<mongoose.Document[]> => {
  return await dal.getAll();
};

export const getCustomerById = async (
  id: string
): Promise<mongoose.Document> => {
  const customer = await dal.getCustomerById(id);
  if (!customer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return customer;
};

export const postCustomer = async (
  customer: CustomerModelType
): Promise<mongoose.Document> => {
  const { error } = validate(customer);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await dal.saveCustomer(new Customer(customer));
};

export const updateCustomer = async (
  id: string,
  customer: CustomerModelType
): Promise<mongoose.Document> => {
  const { error } = validate(customer);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  const updatedCustomer = await dal.updateCustomer(id, new Customer(customer));

  if (!updatedCustomer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return updatedCustomer;
};

export const deleteCustomer = async (
  id: string
): Promise<mongoose.Document> => {
  const customer = await dal.deleteCustomer(id);

  if (!customer) {
    throw new VidlyError(404, `Customer with id ${id} not found`);
  }
  return customer;
};
