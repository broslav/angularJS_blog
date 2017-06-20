class ArticlesController {
    constructor(articles, usersService, $state) {
        'ngInject';
        this.articles = articles;
        this.currentUser = localStorage.getItem("userId");
        this._usersService = usersService;
        this.state = $state;

    }
    //
    // createArticle() {
    //     this._articlesService.createArticle();
    // }

    // getUserById(name) {
    //     this._usersService.getUserByName(name)
    //         .then(() => alert("Success"))
    //         .then(() => this.state.go('app.main.user-profile'));
    // }
}

export default ArticlesController;