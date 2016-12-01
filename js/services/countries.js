    /**
     * Created by user on 11/29/2016.
     */
    myApp.factory('Countries', ['$http', function($http){
        return {
            getCountries: function(){
                return $http.get('storage/countries.json')
            }
        }}]);
