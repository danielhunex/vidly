import Joi from '@hapi/joi';

export interface CustomerApiModel {
  name: string;
  phone: string;
  isGold: boolean;
}

export const validate = (customer: CustomerApiModel): Joi.ValidationResult => {
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
