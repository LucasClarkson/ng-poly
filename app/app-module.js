(function () {
  'use strict';

  /* @ngdoc object
   * @name polaris
   * @description
   *
   */
  angular
    .module('polaris', [
      'ngMaterial',
      'ui.router',
      'home',
      'map',
      'situations'
    ]);
}());
