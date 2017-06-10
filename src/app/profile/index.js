import angular from 'angular';
import ProfileCtrl from './profile.ctrl';

export default angular.module('app.profile', [])
    .controller('ProfileController', ProfileCtrl)
    .name;