import VidlyError from '@Libs/vidlyError';

import {
  Genre,
  GenreDbModel,
  insert,
  purge,
  queryAll,
  queryById,
  update
} from '../dal';

import { validate, GenreApiModel } from './genreApiModel';

export const getGenres = async (): Promise<GenreDbModel[]> => {
  return await queryAll();
};

export const getGenreById = async (
  id: string
): Promise<GenreDbModel | null> => {
  return await queryById(id);
};

export const postGenre = async (
  genre: GenreApiModel
): Promise<GenreDbModel> => {
  const { error } = validate(genre);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await insert(new Genre(genre));
};

export const putGenre = async (
  id: string,
  genre: { name: string }
): Promise<GenreDbModel | null> => {
  const { error } = validate(genre);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await update(id, genre);
};

export const deleteGenre = async (id: string): Promise<GenreDbModel | null> => {
  return await purge(id);
};
