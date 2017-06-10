import angular from 'angular';
import ArticlesCtrl from './articles.ctrl';

export default angular.module('app.articles', [])
    .controller('ArticlesController', ArticlesCtrl)
    .name;