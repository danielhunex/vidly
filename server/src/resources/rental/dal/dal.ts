import mongoose from '@DataAccess';
import { Rental, RentalDbModel } from './rentalDbModel';
import { update, MovieDbModel } from '@Resources/movie/dal';
import VidlyError from '@Libs/vidlyError';

export const insert = async (
  rental: RentalDbModel,
  movieId: string,
  movie: MovieDbModel
): Promise<RentalDbModel | undefined> => {
  const newRental = new Rental(rental);

  const session = await mongoose.startSession();
  session.startTransaction();
  let savedRental;
  try {
    await update(movieId, movie);
    savedRental = await newRental.save(session);

    session.commitTransaction();
  } catch (error) {
    session.abortTransaction();
    throw new VidlyError(500, error?.message);
  } finally {
    session.endSession();
  }

  return savedRental;
};
