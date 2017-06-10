class ArticlesController {
    constructor(articles, currentUser, usersService, $state) {
        this.articles = articles;
        this.currentUser = currentUser;
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