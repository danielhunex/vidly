import express from 'express';
import { post } from './controller';
import asyncWrapper from '@Libs/asyncWrapper';
const route = express.Router();

route.post('/', asyncWrapper(post));

export default route;
