angular
  .module('UsersListController', [])
  .controller('UsersListController', UsersListController)

  UsersListController.$inject = ['UsersListService', '$state', '$stateParams'];

  function UsersListController (UsersListService, $state, $stateParams) {
  	var vm = this;
		vm.deleteUser = deleteUser;
		vm.editUser = editUser;

  	UsersListService
			.listUsers()
	  	.then(function (response) {
	  		return vm.users = response.data.data;
			})

		function deleteUser (id) {
			UsersListService
				.deleteUser(id)
				.then(function () {
					$state.reload();
				})
			
		}

		function editUser (id) {
			$state.go('dashboard.users-edit', {id: id});
		}
	}