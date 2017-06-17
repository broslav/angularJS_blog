import angular from "angular";
import {ArticlesService} from "./artilcles.service";
import profileService from "./profile.service";
import {UsersService} from "./users.service";
import commentsService from "./comments.service";
import {apiConstants} from "./constants";

export default angular.module('services', [])
    .service('articlesService', ArticlesService)
    .factory('profileService', profileService)
    .factory('commentsService', commentsService)
    .factory('usersService', UsersService)
    .constant("apiConstants", apiConstants)
    .name;



