import mongoose from '@DataAccess';

export interface RentalDbModel extends mongoose.Document {
  customer: {
    name: string;
    phone: string;
    isGold: boolean;
  };
  movie: {
    title: string;
    dailyRentalRate: number;
  };
  dateRented?: Date;
  dateReturned?: Date;
  rentalFees?: number;
}

const schemaDefinition = {
  customer: {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 255
    },
    phone: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 13
    },
    isGold: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  movie: {
    title: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 255
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 10
    }
  },
  dateRented: {
    type: Date,
    default: Date.now,
    required: true
  },
  dateReturned: {
    type: Date
  },
  rentalFees: {
    type: Number
  }
};

export const RentalSchema = new mongoose.Schema(schemaDefinition);
export const Rental =
  mongoose.models.rentals ||
  mongoose.model<RentalDbModel>('rentals', RentalSchema);
