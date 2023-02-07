// Purpose     : Request Validation
// Description : Validate each POST and PUT request as per mongoose model

const Joi = require('joi')

const userSchema = Joi.object({
    userName: Joi.string().empty().min(2).max(30).required().trim().messages({
    'string.empty': 'userName not be empty string.',
    'string.min': 'userName should have a minimum length of 2',
    'any.required': 'userName must be required.'
  }),
  gender: Joi.string().empty().valid('Male', 'Female').required().messages({
    'string.empty': 'gender must be required.',
    'any.required': 'gender must be required.'
  }),
  birthDate: Joi.string().empty().required().messages({
    'string.empty': 'birthDate not be empty string.',
    'string.min': 'birthDate should have a minimum length of 2',
    'any.required': 'birthDate must be required.'
  }),
  email: Joi.string().empty().required().email().trim().messages({
    'string.empty': 'Email must be required.',
    'any.required': 'Email must be required.',
    'string.email': 'Invalid email address.'
  }),
  password: Joi.string().empty().min(6).required().trim().messages({
    'string.empty': 'Password must be required.',
    'string.min': 'Password must be at least 6 characters',
    'any.required': 'Password must be required.'
  }),
  confirmPassword: Joi.string()
    .equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .trim()
    .messages({
      'any.only': 'Confirm Password and Password should be Same',
      'any.required': 'Confirm Password must be required.'
    }),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .allow(null)
    .allow('')
    .trim()
    .messages({ 'string.pattern.base': 'Phone number must have 10 digits.' })
})

module.exports = userSchema