import { Request, Response } from 'express';
import * as svc from './service';

export const getCustomers = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send(await svc.getCustomers());
};

export const getCustomerById = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  res.send(await svc.getCustomerById(id));
};

export const postCustomer = async (
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

export const updateCustomer = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const { body } = req;
  const customer = await svc.updateCustomer(id, {
    name: body.name,
    phone: body.phone,
    isGold: body.isGold
  });
  res.send(customer);
};

export const deleteCustomer = async (
  req: Request,
  res: Response
): Promise<void | Response> => {
  const { id } = req.params;
  const customer = await svc.deleteCustomer(id);
  res.send(customer);
};
