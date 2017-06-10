class LoginController {
    constructor($http, $state, profileService, apiConstants) {
        this.user = {};
        this._http = $http;
        this._state = $state;
        this._profileSrv = profileService;

        if(this._profileSrv.getCurrentUserId()) {
            this._state.go('app.main.articles', {}, {reload: true});
        } else {
            console.log("no user");
        }

    }

    getUserName(user) {
        // debugger;
        if (user !== null && user !== undefined) {
            alert(`hello, ${user.name}`);
            localStorage.setItem("userId", user["_id"]["$oid"]);
            this._state.go('app.main.articles', {}, {reload: true});
        } else {
            alert("Данный пользователь не зарегистрирован");
        }
    }

    logIn(user) {
        this.user.password = user.password;
        this.user.name = user.name;
        this.data = {};

        return this._http({
            method: "GET",
            url: `https://api.mlab.com/api/1/databases/blog_base/collections/users?q={"name": "${this.user.name}"}&fo=true&apiKey=llX0Mbnvo0K2p-CsjOk4jAYvveqdRse6`
        })
            .then((data) => this.getUserName(data.data));
        // this.userId = data.userId;
        // .then(data => console.log(data) || data);

    }

    logOut() {
        let usId = this._profileSrv.getCurrentUserId();
    }

}

export default LoginController;