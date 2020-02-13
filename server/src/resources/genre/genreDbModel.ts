import mongoose from '@DataAccess';

export interface GenreType extends mongoose.Document {
  name: string;
}
export const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 }
});

export const Genre = mongoose.model<GenreType>('Genre', GenreSchema);
