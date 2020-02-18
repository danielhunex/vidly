import { Request, Response, NextFunction } from 'express';
import { getAll, postMovie, getMovieById } from './service/';

export const get = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  res.send(await getAll());
};

export const getById = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  res.send(await getMovieById(id));
};

export const post = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { body } = req;
  res.send(await postMovie(body));
};
