import mongoose from '@DataAccess';
import Movie, { MovieType } from './movieDbModel';

export const saveMovie = async (
  movie: MovieType
): Promise<mongoose.Document> => {
  const newMovie = new Movie(movie);
  return await newMovie.save();
};
