(function(){

  console.log("===== API talking port 3000 =====");
  angular.module('BookCollection')
    .controller('BookController', BookController);

    BookController.$inject = ['$http','$state'];

    function BookController($http, $state){

    var self = this;
    var rootUrl = "http://localhost:3000";

    function getAllBooks(){
      $http({
        method: 'GET',
        url: `${rootUrl}/api/books`,
        data: books,
        responseType: 'json'
      })
      .then(function(response){
        self.books = response.data;
        console.log('Books: ', response.data);
      })
      .catch((err) => { console.log(err) });
    }



  }


}) ()
