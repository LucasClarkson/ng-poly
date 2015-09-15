/* global describe, beforeEach, it, browser, expect */
'use strict';

var CompassRosePagePo = require('./compass-rose.po');

describe('Compass rose page', function () {
  var compassRosePage;

  beforeEach(function () {
    compassRosePage = new CompassRosePagePo();
    browser.get('/#/compass-rose');
  });

  it('should say CompassRoseCtrl', function () {
    expect(compassRosePage.heading.getText()).toEqual('compassRose');
    expect(compassRosePage.text.getText()).toEqual('CompassRoseCtrl');
  });
});
