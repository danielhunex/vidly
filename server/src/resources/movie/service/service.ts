import mongoose from '@DataAccess';
import VidlyError from '@Libs/vidlyError';

import { Movie, insert, query, MovieDbModel } from '../dal';
import { queryById } from '@Resources/genre/dal';
import { MovieApiModel, validate } from './movieApiModel';

export const getAll = async (): Promise<MovieDbModel[]> => {
  return await query();
};

export const postMovie = async (
  movie: MovieApiModel
): Promise<mongoose.Document> => {
  const { error } = validate(movie);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  const { genreId } = movie;
  const genreSelected = await queryById(genreId);

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

  return await insert(newMovie);
};
