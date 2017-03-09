angular
  .module('VehiclesSaveService', [])
  .service('VehiclesSaveService', VehiclesSaveService)

  function VehiclesSaveService ($http) {
    var vm = this;
    var uri = 'https://robcar.stamplayapp.com/api/cobject/v1/'

    vm.createVehicle = createVehicle;
    vm.getVehicle = getVehicle;
    vm.editVehicle = editVehicle;
    vm.listClients = listClients;

    function createVehicle (user) {
			return $http({
				url: uri + 'veiculo/',
				method: 'POST',
        data: user
			})
    }

    function getVehicle (id) {
      return $http({
        url: uri + 'veiculo/' + id,
        method: 'GET'
      })
    }

    function editVehicle (id, user) {
      return $http({
        url: uri + 'veiculo/' + id,
        method: 'PUT',
        data: user
      })
    }

    function listClients () {
			return $http({
				url: uri + 'cliente/',
				method: 'GET'
			})
    }
}