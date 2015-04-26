(function() {
  angular.module('nataWedding').config(AppRoute);

  AppRoute.$inject = ['$stateProvider'];
  function AppRoute($stateProvider) {
    $stateProvider
    .state('app', {
      url: '/'
    });
  };

})();
