import mongoose from '@DataAccess';
import VidlyError from '@Libs/vidlyError';

import {
  Movie,
  MovieDocument,
  insertGenre,
  queryMoviesById,
  queryMovies
} from '../dal';
import { queryGenreById as queryMovieById } from '@Resources/genre/dal';
import { MovieApiModel, validate } from './movieApiModel';

export const getAll = async (): Promise<MovieDocument[]> => {
  return await queryMovies();
};

export const getMovieById = async (
  id: string
): Promise<MovieDocument | null> => {
  return await queryMoviesById(id);
};

export const postMovie = async (
  movie: MovieApiModel
): Promise<mongoose.Document> => {
  const { error } = validate(movie);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  const { genreId } = movie;
  const genreSelected = await queryMovieById(genreId);

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

  return await insertGenre(newMovie);
};
