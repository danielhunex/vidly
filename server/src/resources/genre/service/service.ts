import VidlyError from '@Libs/vidlyError';

import {
  Genre,
  GenreDbDocument,
  insertCustomer,
  purgeGenre,
  queryGenres,
  queryGenreById,
  updateGenre
} from '../dal';

import { validate, GenreApiModel } from './genreApiModel';

export const getGenres = async (): Promise<GenreDbDocument[]> => {
  return await queryGenres();
};

export const getGenreById = async (
  id: string
): Promise<GenreDbDocument | null> => {
  return await queryGenreById(id);
};

export const postGenre = async (
  genre: GenreApiModel
): Promise<GenreDbDocument> => {
  const { error } = validate(genre);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await insertCustomer(genre);
};

export const putGenre = async (
  id: string,
  genre: GenreApiModel
): Promise<GenreDbDocument | null> => {
  const { error } = validate(genre);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await updateGenre(id, genre);
};

//TODO: patch? since we have one prope

export const deleteGenre = async (
  id: string
): Promise<GenreDbDocument | null> => {
  return await purgeGenre(id);
};
