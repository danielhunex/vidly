import * as dal from './dal';
import Joi from '@hapi/joi';
import mongoose from '../../dataAccess';
import VidlyError from '@Libs/vidlyError';

function validate(genre: object): Joi.ValidationResult {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required()
  });
  return schema.validate(genre);
}

export const getGenres = async (): Promise<mongoose.Document[]> => {
  return await dal.getAll();
};

export const getGenreById = async (
  id: string
): Promise<mongoose.Document | null> => {
  return await dal.getGenreById(id);
};

export const postGenre = async (genre: {
  name: string;
}): Promise<mongoose.Document> => {
  const { error } = validate(genre);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await dal.saveGenre(genre);
};

export const putGenre = async (
  id: string,
  genre: { name: string }
): Promise<mongoose.Document | null> => {
  const { error } = validate(genre);
  if (error) {
    throw new VidlyError(400, error.details[0].message);
  }
  return await dal.updateGenre(id, genre);
};

export const deleteGenre = async (
  id: string
): Promise<mongoose.Document | null> => {
  return await dal.deleteGenre(id);
};
