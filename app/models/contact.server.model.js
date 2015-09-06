'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	validator = require('./validators/validator');

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		required: 'Please fill Contact\'s first name',
		trim: true
	},
	lastName: {
		type: String,
		default: '',
		required: 'Please fill Contact\'s last name',
		trim: true
	},
	email: {
		type: String,
		default: '',
		require: 'Please fill in email',
		trim: true,
		validate: [validator.email, 'Email is not valid']
	},
	gender: {
		type: String,
		default: 'm',
		enum: ['m', 'f', 'u'],
		trim: true
	},
	phone: {
		type: String,
		required: 'Please input phone number',
		trim: true,
		validate: [validator.mobilePhone, 'Phone number is not valid']
	},
	addresses: [
		{
			line1: {
				type: String,
				default: '',
				required: 'Please input address line 1',
				trim: true
			},
			line2: {
				type: String,
				default: '',
				required: 'Please input addresss line 2',
				trim: true
			},
			phone: {
				type: String,
				default: '',
				trim: true
			},
			postalCode: {
				type: String,
				default: '',
				required: 'Please input postal code',
				trim: true
			},
			isActive: {
				type: Boolean,
				default: false
			}
		}
	],
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Contact', ContactSchema);
