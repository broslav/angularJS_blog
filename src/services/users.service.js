import angular from 'angular';

export default function usersService(apiConstants, $q, $http) {
    const usersApiUrl = `${apiConstants.apiUrl}collections/users`;

    return {
        //getArticleById,
        createNewUser,
        getUserByName
        // getUserArticles,
        // createArticle,
        // deleteArticle,
        // updateArticle
    };

    function createNewUser(newUser) {
        // this.newUser.name = newUser.name;
        // this.newUser.password = newUser.password;
        // this.newUser.email = newUser.email;

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
        this.user.password = user.password;
        this.user.name = user.name;

        return this._http({
            method: "GET",
            url: `https://api.mlab.com/api/1/databases/blog_base/collections/users?q={"name": "${this.user.name}"}&fo=true&apiKey=${apiConstants.apiKey}`
        })
            .then(data => localStorage.setItem("userId", data.data["_id"]["$oid"]))
            .then(() => this._state.go("app.main.articles",{},{reload:true})); //remove dat method @ userService

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



