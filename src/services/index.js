import angular from "angular";
import articlesService from "./artilcles.service";
import profileService from "./profile.service";
import usersService from "./users.service";
import commentsService from "./comments.service";
import constants from "./constants";

export default angular.module('services', [])
    .factory('articlesService', articlesService)
    .factory('profileService', profileService)
    .factory('commentsService', commentsService)
    .factory('usersService', usersService)
    .constant("apiConstants", constants)
    .name;



