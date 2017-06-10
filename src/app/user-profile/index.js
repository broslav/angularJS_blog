import angular from 'angular';
import UserProfileController from "./user-profile.controller";


export default angular.module('app.user-profile', [])
    .controller('UserProfileController', UserProfileController)
    .name;