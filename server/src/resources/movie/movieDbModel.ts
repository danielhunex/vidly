import mongoose from '@DataAccess';
import { GenreSchema, GenreType } from '@Resources/genre';

export interface MovieType extends mongoose.Document {
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genre: GenreType;
}

export const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    min: 3,
    max: 255,
    required: true
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  dailyRentalRate: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  genre: {
    type: GenreSchema,
    required: true
  }
});

const Movie = mongoose.model<MovieType>('movie', MovieSchema);

export default Movie;
