/* global describe, beforeEach, it, browser, expect */
'use strict';

var SituationsPagePo = require('./situations.po');

describe('Situations page', function () {
  var situationsPage;

  beforeEach(function () {
    situationsPage = new SituationsPagePo();
    browser.get('/#/situations');
  });

  it('should say SituationsCtrl', function () {
    expect(situationsPage.heading.getText()).toEqual('situations');
    expect(situationsPage.text.getText()).toEqual('SituationsCtrl');
  });
});
