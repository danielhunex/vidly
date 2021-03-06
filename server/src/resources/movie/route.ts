import express from 'express';
import asyncWrapper from '@Libs/asyncWrapper';
import { post, get, getById } from './controller';

const route = express.Router();
route.get('/', asyncWrapper(get));
route.get('/:id', asyncWrapper(getById));
route.post('/', asyncWrapper(post));

export default route;
