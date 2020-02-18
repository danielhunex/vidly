import { queryCustomerById } from '@Resources/customer/dal';
import { queryMoviesById as queryMovieById } from '@Resources/movie/dal';
import VidlyError from '@Libs/vidlyError';

import { RentalApiModel } from './rentalApiModel';
import { insert, RentalDbModel, Rental } from '../dal';

export const postRental = async (
  rental: RentalApiModel
): Promise<RentalDbModel | undefined> => {
  const customer = await queryCustomerById(rental.customerId);
  if (!customer) {
    throw new VidlyError(
      404,
      `Customer with id ${rental.customerId} not found`
    );
  }
  const movie = await queryMovieById(rental.movieId);

  if (!movie) {
    throw new VidlyError(404, `Movie with id ${rental.movieId} not found`);
  }

  if (movie.numberInStock === 0) {
    throw new VidlyError(404, `No copy of Movie with id ${rental.movieId}`);
  }

  const newRental = {
    customer: {
      _id: customer._id,
      name: customer.name,
      isGold: customer.isGold,
      phone: customer.phone
    },
    movie: {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate
    }
  };
  movie.numberInStock = movie.numberInStock - 1;
  return await insert(new Rental(newRental), rental.movieId, movie);
};
