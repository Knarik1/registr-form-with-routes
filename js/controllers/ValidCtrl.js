/**
 * Created by user on 11/29/2016.
 */
myApp.controller('ValidCtrl',['$scope', 'Countries','UserPost', function($scope, Countries,UserPost){

    $scope.countries = [];
    Countries.getCountries().success( function(data){
        $scope.countries = data;
    }).error(function(){});

    $scope.register = function(user){
        console.log(user);
        UserPost.registrate(user).success( function(data){

        })

    };


    $scope.registerUser = {};

    $scope.reset = function() {
        $scope.list = angular.copy($scope.registerUser);
    };


}]);


myApp.controller('AboutCtrl', function(){
alert(55);
});

myApp.controller('ProductCtrl', function(){
   console.log(54654);
});
