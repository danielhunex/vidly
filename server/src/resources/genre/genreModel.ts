import mongoose from '@DataAccess';

export const GenreSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 }
});

const Genre = mongoose.model('Genre', GenreSchema);
export default Genre;
