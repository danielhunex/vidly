import { Request, Response } from 'express';
import * as svc from './service';
import VidlyError from '@Libs/vidlyError';
import { Genre } from './genreDbModel';

export const getGenres = async (
  _req: Request,
  res: Response
): Promise<void> => {
  res.send(await svc.getGenres());
};

export const getGenreById = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const genre = await svc.getGenreById(id);
  if (!genre) {
    throw new VidlyError(404, `Genre with id ${id} not found`);
  }
  res.send(genre);
};

export const postGenre = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { body } = req;
  const { name } = body;
  res.send(await svc.postGenre(new Genre({ name })));
};

export const putGenre = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const { body } = req;
  const { name } = body;
  const genre = await svc.putGenre(id, { name });

  if (!genre) {
    throw new VidlyError(404, `Genre with id ${id} not found`);
  }
  res.send(genre);
};

export const deleteGenre = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const genre = await svc.deleteGenre(id);
  if (!genre) {
    throw new VidlyError(404, `Genre with id ${id} not found`);
  }
  res.send(genre);
};
