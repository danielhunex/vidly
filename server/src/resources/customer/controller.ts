import { Request, Response } from 'express';
import * as svc from './service/';

export const get = async (req: Request, res: Response): Promise<void> => {
  res.send(await svc.getCustomers());
};

export const getById = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  res.send(await svc.getCustomerById(id));
};

export const post = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { body } = req;
  const customer = await svc.postCustomer({
    name: body.name,
    phone: body.phone,
    isGold: body.isGold
  });

  res.send(customer);
};

export const put = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const { body } = req;
  const customer = await svc.putCustomer(id, {
    name: body.name,
    phone: body.phone,
    isGold: body.isGold
  });
  res.send(customer);
};

export const deleteById = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const customer = await svc.deleteCustomer(id);
  res.send(customer);
};
