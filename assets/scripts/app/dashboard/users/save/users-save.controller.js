angular
  .module('UsersSaveController', [])
  .controller('UsersSaveController', UsersSaveController);

  UsersSaveController.$inject = ['UsersSaveService', '$state', '$stateParams'];

  function UsersSaveController (UsersSaveService, $state, $stateParams) {
    var vm = this;
    vm.param = $stateParams.id;
    vm.saveUser = saveUser;

    vm.messages = {
      title: "Novo usuário",
      button: "Cadastrar"
    }
    
    if (vm.param) {
      UsersSaveService
        .getUser(vm.param)
        .then(function(response) {
            vm.user = response.data;
        console.log(vm.user)
        });

      vm.messages = {
        title: "Alterar usuário",
        button: "Alterar"
      }
    }

    function saveUser () {
      if (vm.param) {

        vm.user = {
          "nome": vm.user.nome, 
        };
        
        UsersSaveService
          .changeUser(vm.param, vm.user)
          .then(function () {
            $state.go('dashboard.users-list');
          });

        return;
      }
      
      UsersSaveService
        .createUser(vm.user)
        .then(function () {
          $state.go('dashboard.users-list');
        });
    }
  }