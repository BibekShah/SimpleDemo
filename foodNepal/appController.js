angular.module("myApp",[])
.controller('dataController', function($scope, $http){
    $scope.e = 1;
    $http.get('foods.json').success(function (data){
        $scope.employees = data;
    });
    $scope.newEntry = function(){
        $scope.employees.push({ name:$scope.location, food:$scope.foods });
    }
    $scope.getTotalPlaces = function(){
        return $scope.employees.length;
    }
    $scope.reversedMessage  =   function(){
        return $scope.empName.split("").reverse().join("");
    }
    $scope.message = 5;
});


                