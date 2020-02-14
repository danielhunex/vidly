import mongoose from '@DataAccess';
import { GenreSchema, GenreDbModel } from '@Resources/genre';

export interface MovieDbModel extends mongoose.Document {
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genre: GenreDbModel;
}

const schemaDefinition = {
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
  genre: { type: GenreSchema, required: true }
};

export const MovieSchema = new mongoose.Schema(schemaDefinition);
export const Movie = mongoose.model<MovieDbModel>('movie', MovieSchema);
