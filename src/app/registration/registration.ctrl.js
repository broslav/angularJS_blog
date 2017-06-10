class RegistrationController {
    constructor(usersService, $state) {
        'ngInject';

        this.newUser = {};
        this._usersService = usersService;
        this.state = $state;
    }

    registerNewUser(newUser) {
        this.newUser.name = newUser.name;
        this.newUser.password = newUser.password;
        this.newUser.email = newUser.email || null;
        this._usersService.createNewUser(newUser)
            .then(() => {
                this.state.go('app.main.login');
            });
        // write it in promise!
    }
}

export default RegistrationController;