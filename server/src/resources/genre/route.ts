import express from 'express';
import { get, getById, deleteById, post, put } from './controller';

import asyncWrapper from '@Libs/asyncWrapper';

const route = express.Router();

route.get('/', asyncWrapper(get));
route.get('/:id', asyncWrapper(getById));
route.post('/', asyncWrapper(post));
route.put('/:id', asyncWrapper(put));
route.delete('/:id', asyncWrapper(deleteById));

export default route;
