(function(){
  angular.module('bookCollection', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('newbook', {
      url: '/newbook',
      templateUrl: 'partials/newbook.html'
    })
    .state('allbooks', {
      url: '/allbooks',
      templateUrl: 'partials/allbooks.html'
    })
    .state('editbooks',{
      url: '/editbooks',
      templateUrl: 'partials/editbooks.html'
    })
    .state('deletebooks',{
      url: '/deletebooks',
      templateUrl: 'partials/deletebooks.html'
    });

     $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }


})() // ends IIFEE

console.log('app.js');
