import { Request, Response, NextFunction } from 'express';

const asyncWrapper = (
  fn: (req: Request, res: Response, next: NextFunction) => any
) => async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any | void> => {
  try {
    return await fn(req, res, next);
  } catch (error) {
    const { status = 500, message = 'Ooooops something went wrong!' } = error;
    res.status(status || 500).send({ status, message });
  }
};

export default asyncWrapper;
