import angular from 'angular';
import UserProfileController from "./user-profile.ctrl";


export default angular.module('app.user-profile', [])
    .controller('UserProfileController', UserProfileController)
    .name;