/**
 * Created by toulon on 3/18/14.
 * Description: Ridiculous tests.
 */
var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
  it('should have mocha installed and running.', function () {
    assert.equal(true, true);
  });
  it('should have libray installed and running for fluent testing.', function () {
    true.should.eql(true);
  })
});

describe('Asynchronous testing', function () {
  var result = false;
  beforeEach(function (done) {
    setTimeout(function () {

      result = true;
      // complete the async beforeEach
      done();
    }, 2000);
  });
  it('should NOT be so hard so this makes it easier.', function (done) {
    result.should.eql(true);
    done();
  })
});