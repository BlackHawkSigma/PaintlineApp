var mainAppModuleName = 'paintlineApp';

var mainAppModule = angular.module(mainAppModuleName, ['angular-loading-bar', 'ngRoute', 'ngResource', 'cosmino', 'artikel']);

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainAppModuleName]);
});