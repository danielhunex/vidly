import Joi, { ValidationResult } from '@hapi/joi';

export interface RentalApiModel {
  customerId: string;
  movieId: string;
}

export const validate = (rental: RentalApiModel): ValidationResult => {
  const joiRentalSchema = Joi.object({
    customerId: Joi.string().required(),
    movieId: Joi.string().required()
  });

  return joiRentalSchema.validate(rental);
};
