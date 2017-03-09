angular
  .module('UsersListService', [])
  .service('UsersListService', UsersListService)

function UsersListService ($http) {
  	var vm = this;
    vm.listUsers = listUsers;
		vm.deleteUser = deleteUser;

    function listUsers () {
			return $http({
				url: 'https://robcar.stamplayapp.com/api/cobject/v1/usuario',
				method: 'GET'
			})
			.then(function(response) {
				return response;
			})
    }
		
		function deleteUser (id) {
			return $http({
				url: 'https://robcar.stamplayapp.com/api/cobject/v1/usuario/' + id,
				method: 'DELETE',
			})
    }
}