'use strict';

describe('Service: nback', function () {

  // load the service's module
  beforeEach(module('textSupportApp'));

  // instantiate service
  var nback;
  beforeEach(inject(function (_nback_) {
    nback = _nback_;
  }));

  it('should do something', function () {
    expect(!!nback).toBe(true);
  });

});
