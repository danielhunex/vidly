import { Request, Response } from 'express';
import {
  deleteGenre,
  getGenreById,
  getGenres,
  postGenre,
  putGenre
} from './service';
import VidlyError from '@Libs/vidlyError';
import { Genre } from './dal';

export const get = async (_req: Request, res: Response): Promise<void> => {
  res.send(await getGenres());
};

export const getById = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const genre = await getGenreById(id);
  if (!genre) {
    throw new VidlyError(404, `Genre with id ${id} not found`);
  }
  res.send(genre);
};

export const post = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { body } = req;
  const { name } = body;
  res.send(await postGenre(new Genre({ name })));
};

export const put = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const { body } = req;
  const { name } = body;
  const genre = await putGenre(id, { name });

  if (!genre) {
    throw new VidlyError(404, `Genre with id ${id} not found`);
  }
  res.send(genre);
};

export const deleteById = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const genre = await deleteGenre(id);
  if (!genre) {
    throw new VidlyError(404, `Genre with id ${id} not found`);
  }
  res.send(genre);
};
