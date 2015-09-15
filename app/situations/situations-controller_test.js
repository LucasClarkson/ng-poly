/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SituationsCtrl', function () {
  var ctrl;

  beforeEach(module('situations'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SituationsCtrl');
  }));

  it('should have ctrlName as SituationsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SituationsCtrl');
  });
});
