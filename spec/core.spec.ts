/* tslint:disable:quotemark */
import { should } from 'chai';
import {
  merge,
  select,
  traverseSchema, traverseForm,
  validate,
  sfPath,
  schemaDefaults,
  canonicalTitleMap,
  jsonref
} from '../dist/package/Core';

should();

describe('core.js', () => {
  it('should hold all the public functions of the original API', () => {
    merge.should.be.an('function');
    select.should.be.an('function');
    traverseSchema.should.be.an('function');
    traverseForm.should.be.an('function');
    validate.should.be.an('function');
    sfPath.should.be.an('object');
    schemaDefaults.should.be.an('object');
    canonicalTitleMap.should.be.an('function');
    jsonref.should.be.an('function');
  });

  describe('Core API', () => {
    it('should contain API'/*,
      () => {}
    */);
  });
});
