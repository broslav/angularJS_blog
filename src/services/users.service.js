import angular from 'angular';

export function UsersService(apiConstants, $q, $http) {
    const usersApiUrl = `${apiConstants.apiUrl}collections/users`;

    return {
        createNewUser,
        getUserByName,
        logIn
    };

    function createNewUser(newUser) {


        return $http({
            method: "POST",
            url: `${usersApiUrl}?apiKey=${apiConstants.apiKey}`,
            data: newUser,
            transformRequest: normalizeUser
        })
            .then(data => data.data)
            .catch(res => $q.reject("Error: cannot create data in database. HTTP status:" + res.status));

        function normalizeUser(data) {
            data.email = data.email || null;

            return angular.toJson(data);
        }
    }

    function logIn(user) {

        return $http({
            method: "GET",
            url: `${apiConstants.apiUrl}collections/users?q={"name": "${user.name}"}&fo=true&apiKey=${apiConstants.apiKey}`
        })
            .then(response => response.data);

    }

    function getUserByName(name) {
        return $http({
            method: "GET",
            url: `${usersApiUrl}/?q={"name": "${name}"}&apiKey=${apiConstants.apiKey}`
        })
            .then(response => response.data)
            .catch(response => $q.reject("Error: cannot create data in database. HTTP status:" + response.status));
    }
};



