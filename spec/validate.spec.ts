import { should } from 'chai';
import { validate } from '../dist/package/Core';

should();

describe('validate.js', () => {
  it('should hold a validation function for testing against tv4 until an option to pass in a validator is created', () => {
    validate.should.be.an('function');
  });

  describe('validate', () => {
    const form = { 'key': [ 'hero' ], 'schema': { 'type': 'string' }};

    it('should return a result object {"error":null, "missing":[], "valid":true}, with valid set to true', () => {
      let value = 'Batman';
      let result = validate(form, value);
      result.valid.should.equal(true);
    });

    it('should return an error object with a message "Invalid type: array (expected string)" when the data is not valid', () => {
      let value = [0];
      let result = validate(form, value);
      result.error.message.should.eq('Invalid type: array (expected string)');
    });
  });
});
