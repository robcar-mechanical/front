angular
  .module('VehiclesListService', [])
  .service('VehiclesListService', VehiclesListService)

function VehiclesListService ($http) {
  	var vm = this;
    vm.listVehicles = listVehicles;

    function listVehicles () {
			return $http({
				url: 'https://robcar.stamplayapp.com/api/cobject/v1/veiculo',
				method: 'GET'
			})
			.then(function(response) {
				return response;
			})
    }
}