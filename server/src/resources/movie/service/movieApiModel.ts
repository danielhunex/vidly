import Joi from '@hapi/joi';

export interface MovieApiModel {
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genreId: string;
}

export function validate(movie: MovieApiModel): Joi.ValidationResult {
  const schema = Joi.object({
    title: Joi.string()
      .required()
      .min(2),
    numberInStock: Joi.number()
      .required()
      .min(0),
    dailyRentalRate: Joi.number()
      .required()
      .min(0),
    genreId: Joi.string().required()
  });
  return schema.validate(movie);
}
