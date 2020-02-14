import express from 'express';
import asyncWrapper from '@Libs/asyncWrapper';
import { post, get } from './controller';

const route = express.Router();
route.get('/', asyncWrapper(get));
route.post('/', asyncWrapper(post));

export default route;
