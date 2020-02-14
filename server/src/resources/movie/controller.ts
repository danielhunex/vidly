import { Request, Response, NextFunction } from 'express';
import { getAll, postMovie } from './service/';

export const get = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  res.send(await getAll());
};

export const post = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { body } = req;
  res.send(await postMovie(body));
};
