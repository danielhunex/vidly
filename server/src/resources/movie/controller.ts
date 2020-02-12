import { Request, Response, NextFunction } from 'express';
import * as svc from './service';

export const postMovie = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { body } = req;
  res.send(await svc.postMovie(body));
};
