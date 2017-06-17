import angular from 'angular';
import { ProfileController } from './profile.ctrl';

export default angular.module('app.profile', [])
    .controller('ProfileController', ProfileController)
    .name;