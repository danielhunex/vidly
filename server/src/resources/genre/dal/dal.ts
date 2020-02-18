import { GenreDbDocument, GenreDbModel, Genre } from './genreDbModel';
import VidlyError from '@Libs/vidlyError';

export const queryGenres = async (): Promise<GenreDbDocument[]> => {
  return await Genre.find();
};

export const queryGenreById = async (
  id: string
): Promise<GenreDbDocument | null> => {
  return await Genre.findById(id);
};

export const insertCustomer = async (
  genre: GenreDbModel
): Promise<GenreDbDocument> => {
  const newGenre = new Genre(genre);
  return await newGenre.save();
};

export const updateGenre = async (
  id: string,
  genre: GenreDbModel
): Promise<GenreDbDocument | null> => {
  const genreDb = await Genre.findById(id);

  if (!genreDb) {
    throw new VidlyError(404, `Genre with id ${id} not found`);
  }
  genreDb.name = genre.name;
  return await genreDb.save();
};

export const purgeGenre = async (
  id: string
): Promise<GenreDbDocument | null> => {
  return await Genre.findByIdAndRemove(id);
};
