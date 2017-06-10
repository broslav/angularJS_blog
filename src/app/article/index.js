import angular from 'angular';
import ArticleCtrl from './article.ctrl';

export default angular.module('app.article', [])
    .controller('ArticleController', ArticleCtrl)
    .name;