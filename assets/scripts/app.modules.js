angular
  .module('App', [
      'angularMaterializeAutoComplete',
      'LoginController',
      'DashboardController',
      'Routes',

      /**
       * Modulos para ordens de serviço
       */
      'OsCreateController',
      'OsCreateService',

      'OsListController',
      'OsListService',

      /**
       * Modulos para veículos
       */
      'VehiclesSaveController',
      'VehiclesSaveService',

      'VehiclesListController',
      'VehiclesListService',

      /**
       * Modulos para veículos
       */
      'UsersSaveController',
      'UsersSaveService',

      'UsersListController',
      'UsersListService'
    ])
