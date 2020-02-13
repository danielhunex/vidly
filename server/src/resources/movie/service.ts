import { Genre } from '@Resources/genre';
import mongoose from '@DataAccess';
import VidlyError from '@Libs/vidlyError';
import * as dal from './dal';
import Joi from '@hapi/joi';
import Movie from './movieDbModel';

function validate(movie1: object): Joi.ValidationResult {
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
  return schema.validate(movie1);
}

export const postMovie = async (movie: {
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genreId: string;
}): Promise<mongoose.Document> => {
  const { error } = validate(movie);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  const { genreId } = movie;
  const genreSelected = await Genre.findById(genreId);

  if (!genreSelected) {
    throw new VidlyError(404, `Genre with id ${genreId} does not exist`);
  }

  const newMovie = new Movie({
    title: movie.title,
    numberInStock: movie.numberInStock,
    dailyRentalRate: movie.dailyRentalRate,
    genre: {
      _id: genreSelected._id,
      name: genreSelected.name
    }
  });

  return await dal.saveMovie(newMovie);
};
