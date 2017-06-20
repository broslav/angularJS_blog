'use strict';

export default class MainController {
    constructor(currentUser, $state) {
        'ngInject';

        this.user = currentUser;
        this.state = $state;
    }

    logOut() {
        delete this.user;
        localStorage.removeItem("userId");
    }
}
