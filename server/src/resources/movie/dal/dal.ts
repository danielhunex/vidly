import { Movie, MovieDocument, MovieDbModel } from './movieDbModel';
import VidlyError from '@Libs/vidlyError';

export const queryMovies = async (): Promise<MovieDocument[]> => {
  return await Movie.find();
};

export const queryMoviesById = async (
  id: string
): Promise<MovieDocument | null> => {
  return await Movie.findById(id);
};

export const insertGenre = async (
  movie: MovieDocument
): Promise<MovieDocument> => {
  const newMovie = new Movie(movie);
  return await newMovie.save();
};

export const update = async (
  id: string,
  movie: MovieDbModel
): Promise<MovieDocument> => {
  const movieFromDb = await Movie.findById(id);
  if (!movieFromDb) {
    throw new VidlyError(404, `Movie with id ${id} not found`);
  }

  movieFromDb.title = movie.title;
  movieFromDb.numberInStock = movie.numberInStock;
  movieFromDb.dailyRentalRate = movie.dailyRentalRate;
  movieFromDb.genre = movie.genre;
  return await movieFromDb.save();
};
