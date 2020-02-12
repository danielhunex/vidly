import { Request, Response, NextFunction } from 'express';
import VidlyError from '@Libs/vidlyError';
export default function handleError(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const error = err as VidlyError;
  const status = error ? error.status || 500 : 500;
  const message = err.message || 'Oooops something went wrong!';
  res.status(status).send({ status, message });
}
