import { should } from 'chai';
import { sfPath } from '../dist/package/Core';

should();

describe('sf-path.js', () => {
  it('should hold functions for working with object paths and keys', () => {
    sfPath.parse.should.be.an('function');
    sfPath.stringify.should.be.an('function');
    sfPath.normalize.should.be.an('function');
    sfPath.name.should.be.an('function');
  });

  // describe('parse', () => {
  //   it('should ', () => {
  //     should.be.eq();
  //   });
  // });
  //
  // describe('stringify', () => {
  //   it('should ', () => {
  //     should.be.eq();
  //   });
  // });
  //
  // describe('normalize', () => {
  //   it('should ', () => {
  //     should.be.eq();
  //   });
  // });
  //
  // describe('name', () => {
  //   it('should ', () => {
  //     should.be.eq();
  //   });
  // });
});
