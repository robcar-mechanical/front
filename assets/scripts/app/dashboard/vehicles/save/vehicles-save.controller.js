angular
  .module('VehiclesSaveController', [])
  .controller('VehiclesSaveController', VehiclesSaveController);

  VehiclesSaveController.$inject = ['VehiclesSaveService', '$state', '$stateParams'];

  function VehiclesSaveController (VehiclesSaveService, $state, $stateParams) {
    var vm = this;
    vm.param = $stateParams.id;
    vm.saveVehicle = saveVehicle;
    vm.listClients = listClients;


    vm.messages = {
      title: "Novo Veículo",
      button: "Cadastrar"
    }


    /**
     * Caso haja um parâmetro na URL ele busca todos veículos
     */
    if (vm.param) {
      VehiclesSaveService
        .getVehicle(vm.param)
        .then(function(response) {
          vm.vehicle = response.data;
        });

      vm.messages = {
        title: "Alterar Veículo",
        button: "Alterar"
      }
    }


    /**
     * Método que busca e lista todos clientes
     *
     * VehiclesSaveService.listClients
     */
    function listClients () {
      return VehiclesSaveService
        .listClients()
        .then(function (response) {
          return response.data.data;
        })
    }


    /**
     * Caso haja um parâmetro na URL (vm.param) ele irá chamar o método para
     * edição de um veículo já existente, se não chama o método para criar um novo veículo
     *
     * VehiclesSaveService.editVehicle
     * VehiclesSaveService.createVehicle
     */
    function saveVehicle () {
      if (vm.param) {
        vm.vehicle = {
          "nome": vm.vehicle.nome,
        };
        
        VehiclesSaveService
          .editVehicle(vm.param, vm.vehicle)
          .then(function () {
            $state.go('dashboard.vehicles-list');
          });

        return;
      }

      vm.vehicle.cliente_id = vm.cliente._id;

      VehiclesSaveService
        .createVehicle(vm.vehicle)
        .then(function () {
          console.log(vm.vehicle)
          $state.go('dashboard.vehicles-list');
        });
    }
  }