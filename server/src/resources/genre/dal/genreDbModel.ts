import mongoose from '@DataAccess';

export interface GenreDbModel {
  name: string;
}

export interface GenreDbDocument extends GenreDbModel, mongoose.Document {}

const schemaDefintion = {
  name: { type: String, required: true, minlength: 3, maxlength: 50 }
};
export const GenreSchema = new mongoose.Schema(schemaDefintion);

export const Genre =
  mongoose.models.Genres ||
  mongoose.model<GenreDbDocument>('Genres', GenreSchema);
