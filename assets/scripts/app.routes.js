angular
  .module('Routes', ['ui.router'])
  .config(config)
  
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  
  function config ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'assets/scripts/app/login/login.html',
        controller: 'LoginController'
      })

      .state('dashboard', {
        url: '/',
        templateUrl: 'assets/scripts/app/dashboard/dashboard.html',
        controller: 'DashboardController'
      })

      /**
       * Rotas para ordens de serviço
       */
      .state('dashboard.os-list', {
        url: 'os/',
        controller: 'OsListController',
        templateUrl: 'assets/scripts/app/dashboard/os/list/os-list.html'
      })
      .state('dashboard.os-create', {
        url: 'os/create',
        controller: 'OsCreateController',
        templateUrl: 'assets/scripts/app/dashboard/os/create/os-create.html'
      })

      /**
       * Rotas para veículos
       */
      .state('dashboard.vehicles-list', {
        url: 'vehicles/',
        controller: 'VehiclesListController',
        templateUrl: 'assets/scripts/app/dashboard/vehicles/list/vehicles-list.html'
      })
      .state('dashboard.vehicles-create', {
        url: 'vehicles/save',
        controller: 'VehiclesSaveController',
        templateUrl: 'assets/scripts/app/dashboard/vehicles/save/vehicles-save.html'
      })
      .state('dashboard.vehicles-edit', {
        url: 'vehicles/edit/:id',
        controller: 'VehiclesListController',
        templateUrl: 'assets/scripts/app/dashboard/vehicles/save/vehicles-save.html'
      })

      /**
       * Rotas para usuários
       */
      .state('dashboard.users-list', {
        url: 'users/',
        controller: 'UsersListController',
        templateUrl: 'assets/scripts/app/dashboard/users/list/users-list.html'
      })
      .state('dashboard.users-create', {
        url: 'users/create',
        controller: 'UsersSaveController',
        templateUrl: 'assets/scripts/app/dashboard/users/save/users-save.html'
      })
      .state('dashboard.users-edit', {
        url: 'users/edit/:id',
        controller: 'UsersListController',
        templateUrl: 'assets/scripts/app/dashboard/users/save/users-save.html'
      })

      /**
       * Rotas para 4rever
       */
      $urlRouterProvider.otherwise('/login');
};