import mongoose from '@DataAccess';
import { GenreSchema, GenreDbDocument } from '@Resources/genre';

export interface MovieDbModel {
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genre: GenreDbDocument;
}

export interface MovieDocument extends MovieDbModel, mongoose.Document {
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genre: GenreDbDocument;
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
export const Movie = mongoose.model<MovieDocument>('movies', MovieSchema);
