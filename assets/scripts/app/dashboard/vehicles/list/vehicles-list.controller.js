angular
  .module('VehiclesListController', [])
  .controller('VehiclesListController', VehiclesListController)


  VehiclesListController.$inject = ['VehiclesListService'];

  function VehiclesListController (VehiclesListService) {
  	var vm = this;

  	VehiclesListService.listVehicles()
	  	.then(function (response) {
	  		return vm.vehicles = response.data.data;
	  	})
  }