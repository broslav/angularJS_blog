class ProfileController {
    constructor(user, articles) {
        this.user = user[0];
        this.articles = articles;
        this.usersPosts = this.articles.length;
    }
}

export default ProfileController;