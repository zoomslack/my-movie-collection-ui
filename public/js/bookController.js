
(function() {
  angular.module('bookCollection')
 .controller('BookController',BookController);

 function BookController($http, $state) {
  var self = this;
  //var rootUrl = "http://localhost:3000";
  var rootUrl = "https://aqueous-depths-50833.herokuapp.com"

  // functions relating back to controller
  self.getAllBooks = getAllBooks;
  self.createTask = createTask;
  self.deleteOneTask = deleteOneTask;
  self.update = update;

  // invoke funciton to get books here
  getAllBooks()

    // ALL BOOKS
    function getAllBooks() {
      $http({
        method: 'GET',
        url: `${rootUrl}/api/books`,
        data: {},
        responseType: 'json'
      })
      .then(function(response) {
        self.bookList = response.data.books;
        console.log('Books', response.data);
      })
      .catch((err) => { console.log(err) });
    } // ends getbooks()

    // CREATE BOOKS
    function createTask(detail) {
      console.log("detail ", detail);
      $http({
        method: 'POST',
        url: `${rootUrl}/api/books`,
        data: {
          title: detail.title,
          author: detail.author,
          publisher: detail.publisher
        }
      })
      .then(function(response) {
        console.log('Response ', response.data);
        self.bookList.push(response.data.book);
        self.detail ='';
        $state.go('allbooks');
      })
      .catch((err) => { console.log(err) });
    } // ends createbook()

    // DELETE BOOKS
    function deleteOneTask(i) {
      console.log(`deleteOneTask function call line ${i}`);
      $http({
        method: 'DELETE',
        url: `${rootUrl}/api/books/${self.bookList[i].id}`,
        data: {},
        responseType: 'json'
      })
      .then(function(response) {
        console.log("RESPONSE-deleteOneTask", response.data);         // test - 2B deleted
        self.bookList.splice(i,1);

        $state.go('editbooks');
      })
      .catch((err) => { console.log(err) });

    } // ends delete function()

    // UPDATE BOOKS
    function update (book){
        $http({
        url: `${rootUrl}/api/books/${book.id}`,
        method: 'PUT',
        data: book
      })
      .then(function(response){
        book.title = response.data.book.title
        book.author = response.data.book.author
        book.publisher = response.data.book.publisher
        console.log(book);

        $state.go('allbooks');

      })
      .catch(function(error){
        console.log(error);
      })
    }

  } // ends Book Controller ()

})() // ends IIFFEE
