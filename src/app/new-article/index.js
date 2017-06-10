import angular from 'angular';
import newArticleCtrl from './new-article.ctrl';

export default angular.module("app.new-article", [])
    .controller("NewArticleController", newArticleCtrl)
    .name;