import { Request, Response, NextFunction } from 'express';
import { postRental } from './service/';

export const post = async (
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> => {
  const { body } = req;

  res.send(await postRental(body));
};
