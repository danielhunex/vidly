import { Movie, MovieDbModel } from './movieDbModel';

export const query = async (): Promise<MovieDbModel[]> => {
  return await Movie.find();
};

export const insert = async (movie: MovieDbModel): Promise<MovieDbModel> => {
  const newMovie = new Movie(movie);
  return await newMovie.save();
};
