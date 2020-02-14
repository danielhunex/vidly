import Joi from '@hapi/joi';

export interface GenreApiModel {
  name: string;
}
export function validate(genre: GenreApiModel): Joi.ValidationResult {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required()
  });
  return schema.validate(genre);
}
