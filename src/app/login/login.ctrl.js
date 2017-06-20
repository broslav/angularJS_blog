class LoginController {
    /**
     * @param $state
     * @param profileService
     * @param {UsersService} usersService
     */
    constructor($state, profileService, usersService) {
        'ngInject';
        this.user = {};
        this._state = $state;
        this._profileSrv = profileService;
        this._usersService = usersService;

        if (this._profileSrv.getCurrentUserId()) {
            this._state.go('app.main.articles', {}, {reload: true});
        } else {
            console.log("no user");
        }

    }

    // getUserName(user) {
    //     if (user !== null && user !== undefined) {
    //         alert(`hello, ${user.name}`);
    //         localStorage.setItem("userId", user["_id"]["$oid"]);
    //         this._state.go('app.main.articles', {}, {reload: true});
    //     } else {
    //         alert("Данный пользователь не зарегистрирован");
    //     }
    // }

    logIn(user) {

        return this._usersService.logIn(user)
            .then((data) => {
                if (data !== null && !(user.password === data.password)) {
                    alert("Неверный пароль, попробуйте еще раз");
                    this.user.password = null;

                } else if (data !== null) {
                    localStorage.setItem("userId", data["_id"]["$oid"]);
                    this._state.go("app.main.articles", {}, {reload: true});
                }
                else {
                    alert("Нет такого пользователя, попробуйте еще раз");
                    this.user.name = null;
                    this.user.password = null;
                }
            });
    }
}

export default LoginController;