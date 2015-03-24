'use strict';

describe('walletsApp.version module', function() {
  beforeEach(module('walletsApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('1.0');
    }));
  });
});
