export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/states/greenery/greenery.html',
      controller: 'GreeneryController',
      controllerAs: 'gc'
    });

  $urlRouterProvider.otherwise('/');
}
