/* global angular */

angular.module('artikel').config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
    .when('/artikel', {
      templateUrl: 'cosmino/artikel',
      name: 'Artikel'
    })
  }
])
