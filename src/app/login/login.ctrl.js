class LoginController {
    /**
     * @param $http
     * @param $state
     * @param profileService
     * @param {UsersService} usersService
     */
    constructor($http, $state, profileService, usersService) {
        'ngInject';
        this.user = {};
        this._http = $http;
        this._state = $state;
        this._profileSrv = profileService;
        this._usersService = usersService;

        if (this._profileSrv.getCurrentUserId()) {
            this._state.go('app.main.articles', {}, {reload: true});
        } else {
            console.log("no user");
        }

    }

    getUserName(user) {
        if (user !== null && user !== undefined) {
            alert(`hello, ${user.name}`);
            localStorage.setItem("userId", user["_id"]["$oid"]);
            this._state.go('app.main.articles', {}, {reload: true});
        } else {
            alert("Данный пользователь не зарегистрирован");
        }
    }

    logIn(user) {

        return this._usersService.logIn(user)
            .then((data) => {
                localStorage.setItem("userId", data["_id"]["$oid"]);
                this._state.go("app.main.articles", {}, {reload: true})
            });

    }

    logOut() {
        let usId = this._profileSrv.getCurrentUserId();
    }

}

export default LoginController;