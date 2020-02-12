import mongoose from '@DataAccess';
import Movie, { MovieSchema } from './movieModel';

export const saveMovie = async (
  movie: typeof MovieSchema
): Promise<mongoose.Document> => {
  const newMovie = new Movie(movie);
  return await newMovie.save();
};
