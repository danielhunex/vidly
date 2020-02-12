import { MovieSchema } from './movieModel';
import mongoose from '@DataAccess';
import VidlyError from '@Libs/vidlyError';
import * as dal from './dal';
import Joi from '@hapi/joi';

function validate(movie: object): Joi.ValidationResult {
  const schema = Joi.object({
    title: Joi.string()
      .min(3)
      .required(),
    numberInStock: Joi.number()
      .required()
      .min(0),

    dailyRentalRate: Joi.number()
      .required()
      .min(0),
    genre: {
      name: Joi.string()
        .required()
        .min(3)
    }
  });
  return schema.validate(movie);
}

export const postMovie = async (
  movie: typeof MovieSchema
): Promise<mongoose.Document> => {
  const { error } = validate(movie);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await dal.saveMovie(movie);
};
