import mongoose from '@DataAccess';

const schema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 }
});

const Genre = mongoose.model('Genre', schema);
export default Genre;
