import mongoose from 'mongoose';
import debug from 'debug';

const tidlyDebug = debug('vidly:app');
const dbUrl = process.env.DB_URL || '';

mongoose
  .connect(dbUrl, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => tidlyDebug('Connected to MongoDb...'))
  .catch((err: Error) => tidlyDebug('Error occured', err));

export default mongoose;
