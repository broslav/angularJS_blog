'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router/release/angular-ui-router';

import configAppRouter from './app.router';
import MainController from './app.ctrl';
import loginModule from './login';
import registrationModule from './registration';
import profileModule from './profile';
import articlesModule from './articles';
import articleModule from './article';
import userProfileModule from './user-profile';
import newArticleModule from './new-article';
import services from '../services';

const deps = [
    services,
    uiRouter,
    loginModule,
    articlesModule,
    articleModule,
    registrationModule,
    profileModule,
    newArticleModule,
    userProfileModule
];

export default angular.module('app', deps)
    .config(configAppRouter)
    .controller('MainController', MainController)
    .name;

