class NewArticleController {
    constructor(articles, currentUser, articlesService, $state) {
        'ngInject';
        this.articles = articles;
        this.currentUser = currentUser;
        this._articlesService = articlesService;
        this.newArticle = {};
        this.state = $state;
    }

    createArticle(newArticle) {
        this.newArticle.tags = newArticle.tags || null;
        this.newArticle.title = newArticle.title;
        this.newArticle.body = newArticle.body;
        this.newArticle.author = this.currentUser.name;
        this.newArticle.id = this.currentUser['_id']['$oid'];
        this._articlesService.createArticle(this.newArticle)
            .then()
            .then(() => {
                this.state.go('app.main.articles');
            });
    }

}

export default NewArticleController;