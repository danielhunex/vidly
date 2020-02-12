import express from 'express';
import asyncWrapper from '@Libs/asyncWrapper';
import { postMovie } from './controller';

const route = express.Router();
route.post('/', asyncWrapper(postMovie));

export default route;
