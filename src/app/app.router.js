'use strict';

export default function configAppRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');

    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            template: '<div ui-view></div>',
            resolve: {
                currentUser(profileService) {
                    return profileService.getCurrentUser();
                }
            }
        })
        .state('app.main', {
            url: '/',
            abstract: true,
            template: require('./app.html'),
            controller: 'MainController',
            controllerAs: '$ctrl'
        })
        .state('app.main.welcome', {
            url: 'welcome',
            template: require('./login/login.html'),
            controller: 'LoginController',
            controllerAs: '$ctrl'
        })
        .state('app.main.login', {
            url: 'login',
            template: require('./login/login.html'),
            controller: 'LoginController',
            controllerAs: '$ctrl'
        })
        .state('app.main.registration', {
            url: 'registration',
            template: require('./registration/registration.html'),
            controller: 'RegistrationController',
            controllerAs: '$ctrl'
        })
        .state('app.main.profile', {
            url: 'profile/:name',
            template: require('./profile/profile.html'),
            controller: 'ProfileController',
            controllerAs: '$ctrl',
            resolve: {
                user(usersService, $stateParams) {
                    return usersService.getUserByName($stateParams.name);
                },
                articles(articlesService, $stateParams) {
                    return articlesService.getArticleByUserName($stateParams.name);
                }
            }
        })
        .state('app.main.articles', {
            url: 'articles',
            template: require('./articles/articles.html'),
            controller: 'ArticlesController',
            controllerAs: '$ctrl',
            resolve: {
                articles(articlesService) {
                    return articlesService.getArticles();
                }
            }
        })
        .state('app.main.article', {
            url: 'article/:id',
            template: require('./article/article.html'),
            controller: 'ArticleController',
            controllerAs: '$ctrl',
            resolve: {
                article(articlesService, $stateParams) {
                    return articlesService.getArticleById($stateParams.id);
                },
                comments(commentsService, $stateParams) {
                    return commentsService.getComments($stateParams.id);
                }
            }
        })
        .state('app.main.new-article', {
            url: 'new-article',
            template: require('./new-article/new-article.html'),
            controller: 'NewArticleController',
            controllerAs: '$ctrl',
            resolve: {
                articles(articlesService) {
                    return articlesService.getArticles();
                }
            }
        })
}
