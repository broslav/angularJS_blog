import angular from "angular";
import RegistrationCtrl from "./registration.ctrl";

export default angular.module("app.registration", [])
    .controller("RegistrationController", RegistrationCtrl)
    .name;