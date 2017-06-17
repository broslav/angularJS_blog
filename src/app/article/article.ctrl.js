class ArticleController {
    constructor(article, articlesService, comments, currentUser, commentsService, $state) {
        'ngInject';
        this.article = article;
        this.currentUser = currentUser;
        this._commentsSerivce = commentsService;
        this._articlesService = articlesService;
        this.showAddCommentForm = false;
        this.comments = (comments.length === 0) ? [{body: "Пока никто не оставил комментарий"}] : comments;
        this.newComment = {};
        this._$state = $state;
        this.articleEditing = false;

        console.log(this.comments);
    }

    toggleAddCommentBlock() {
        this.showAddCommentForm = !this.showAddCommentForm;
    };

    thisIsUsersPost(userName) {
        return this.currentUser.name == userName;
    };

    addNewComment(newComment) {

        this.newComment.id = this.article["_id"]["$oid"];
        this.newComment.author = this.currentUser.name;
        this.newComment.body = newComment.body;

        this._commentsSerivce.createComment(this.newComment)
            .then(() => {
                this.comments.push(this.newComment);
                this.newComment = {};
                this.toggleAddCommentBlock()
            });
    };

    removePost(id) {

        let confirm = window.confirm("Данная новость будет удалена. Вы уверены?");

        if (!confirm) {
            alert("Вы отменили удаление записи");
            return;
        } else {
            this._articlesService.deleteArticle(id)
                .then(() => alert("Post has been deleted successfully."))
                .then(() => this._$state.go('app.main.articles'));
        }

    };

    updateArticle(article) {
        this._articlesService.updateArticle(this.article["_id"]["$oid"], article)
            .then(() => alert("Пост был изменен удачно)"))
            .then(() => this._$state.reload())
            .then(() => this.articleEditing = false);
    }

    removeComment(id) {
        this._commentsSerivce.removeComment(id)
            .then(() => alert("success"))
            .then(() => this._$state.reload());
    }
}

export default ArticleController;