import mongoose from '@DataAccess';
import { GenreSchema } from '@Resources/genre';
export const MovieSchema = new mongoose.Schema({
  title: String,
  numberInStock: Number,
  dailyRentalRate: Number,
  genre: {
    type: GenreSchema
  }
});
const Movie = mongoose.model('movie', MovieSchema);

export default Movie;
