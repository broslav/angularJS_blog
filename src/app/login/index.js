import angular from "angular";
import "./login.scss";
import LoginCtrl from './login.ctrl';



export default angular.module('app.login', [])
    .controller('LoginController', LoginCtrl)
    .name;