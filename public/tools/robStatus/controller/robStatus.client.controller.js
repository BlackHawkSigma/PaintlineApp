angular.module('tools_robStatus').controller('RobStatusCtrl', ['$scope', '$filter', 'Upload', 'Tools',
  function($scope, $filter, Upload, Tools) {

    $scope.upload = function(file) {
      Upload.upload({
        url: 'api/tools/robStatus',
        data: {
          file: file
        }
      })
      .success(function(respsonse, status, headers, config) {
        $scope.entries = respsonse.nok
        $scope.missing = respsonse.missing
        $scope.summary = respsonse.summary
      })
    }
  }
])