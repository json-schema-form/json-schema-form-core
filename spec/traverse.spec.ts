import { should } from 'chai';
import { traverseSchema, traverseForm } from '../dist/package/Core';

should();

describe('traverse.js', () => {
  it('should hold functions for applying functions on branches of a json-schema or ui-schema', () => {
    traverseSchema.should.be.an('function');
    traverseForm.should.be.an('function');
  });

  // describe('traverseSchema', () => {
  //   it('should ', () => {
  //     should.be.eq();
  //   });
  // });
  //
  // describe('traverseForm', () => {
  //   it('should ', () => {
  //     should.be.eq();
  //   });
  // });
});
