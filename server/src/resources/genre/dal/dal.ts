import { GenreDbModel, Genre } from './genreDbModel';

export const queryAll = async (): Promise<GenreDbModel[]> => {
  return await Genre.find();
};

export const queryById = async (id: string): Promise<GenreDbModel | null> => {
  return await Genre.findById(id);
};

export const insert = async (genre: GenreDbModel): Promise<GenreDbModel> => {
  const newGenre = new Genre(genre);
  return await newGenre.save();
};

export const update = async (
  id: string,
  genre: { name: string }
): Promise<GenreDbModel | null> => {
  return await Genre.findOneAndUpdate({ _id: id }, genre, { new: true });
};

export const purge = async (id: string): Promise<GenreDbModel | null> => {
  return await Genre.findByIdAndRemove(id);
};
