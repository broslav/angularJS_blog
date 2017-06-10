'use strict';

export default class MainController {
    constructor(currentUser, $state) {
        'ngInject';

        this.user = currentUser;
        this.state = $state;

    }

    logOut() {
        localStorage.removeItem("userId");
        this.user = {};
    }
}
