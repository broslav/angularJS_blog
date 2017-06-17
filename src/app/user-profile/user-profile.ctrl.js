class UserProfileController {
    constructor(user) {
        'ngInject';
        this.user = user[0];
        console.log(this.user);
    }
}

export default UserProfileController;