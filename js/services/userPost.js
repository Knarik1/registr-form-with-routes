    /**
     * Created by user on 11/29/2016.
     */
   myApp.factory('UserPost',['$http' ,function($http) {
       return {
           registrate: function (user) {
               return $http({
                   method: 'POST',
                   url: 'store.php',
                   data: user
               })
           }
       }
   }]);
