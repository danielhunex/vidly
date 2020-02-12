import asyncWrapper from '@Libs/asyncWrapper';
import express from 'express';
import {
  deleteCustomer,
  getCustomerById,
  getCustomers,
  postCustomer,
  updateCustomer
} from './controller';

const route = express.Router();

route.get('/', asyncWrapper(getCustomers));
route.get('/:id', asyncWrapper(getCustomerById));
route.post('/', asyncWrapper(postCustomer));
route.put('/:id', asyncWrapper(updateCustomer));
route.delete('/:id', asyncWrapper(deleteCustomer));

export default route;
