import { Genre, GenreType } from './genreDbModel';
import mongoose from '@DataAccess';

export const getAll = async (): Promise<mongoose.Document[]> => {
  return await Genre.find();
};

export const getGenreById = async (
  id: string
): Promise<mongoose.Document | null> => {
  return await Genre.findById(id);
};

export const saveGenre = async (
  genre: GenreType
): Promise<mongoose.Document> => {
  const newGenre = new Genre(genre);
  return await newGenre.save();
};

export const updateGenre = async (
  id: string,
  genre: { name: string }
): Promise<mongoose.Document | null> => {
  return await Genre.findOneAndUpdate({ _id: id }, genre, { new: true });
};

export const deleteGenre = async (
  id: string
): Promise<mongoose.Document | null> => {
  return await Genre.findByIdAndRemove(id);
};
