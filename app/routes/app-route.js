(function() {
  angular.module('nataWedding').config(AppRoute);

  function AppRoute() {
    this.$stateProvider
    .state('app', {
      url: '/'
    });
  };

})();
