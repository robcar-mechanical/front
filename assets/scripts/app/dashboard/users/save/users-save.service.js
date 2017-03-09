angular
  .module('UsersSaveService', [])
  .service('UsersSaveService', UsersSaveService)

  function UsersSaveService ($http) {
    var vm = this;
    vm.saveUser = saveUser;
    vm.getUser = getUser;  
    vm.changeUser = changeUser;

    function saveUser (user) {
			return $http({
				url: 'https://robcar.stamplayapp.com/api/cobject/v1/usuario',
				method: 'POST',
        data: user
			})
    }

    function getUser (id) {
      return $http({
        url: 'https://robcar.stamplayapp.com/api/cobject/v1/usuario/' + id,
        method: 'GET'
      })
    }

    function changeUser (id, user) {
      return $http({
        url: 'https://robcar.stamplayapp.com/api/cobject/v1/usuario/' + id,
        method: 'PUT',
        data: user
      })
    }
}