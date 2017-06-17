import {apiConstants} from './constants';

export class ArticlesService {
    constructor($q, $http) {
        this.articlesApiUrl = `${apiConstants.apiUrl}collections/articles`;
        this.$q = $q;
        this.$http = $http;
    }


    getArticles() {
        return this.$http({
            method: "GET",
            url: `${this.articlesApiUrl}?apiKey=${apiConstants.apiKey}`
        })
            .then(data => data.data)
            .catch(res => this.$q.reject("Error: cannot create data from database. HTTP status:" + res.status));
    }

    getArticleById(id) {
        return this.$http({
            method: "GET",
            url: `${this.articlesApiUrl}/${id}?apiKey=${apiConstants.apiKey}`
        })
            .then(data => data.data)
            .catch(res => this.$q.reject("Error: cannot get data from database. HTTP status:" + res.status));
    }

    getArticleByUserName(name) {
        return this.$http({
            method: "GET",
            url: `${this.articlesApiUrl}/?q={"author": "${name}"}&apiKey=${apiConstants.apiKey}`
        })
            .then(data => data.data)
            .catch(res => this.$q.reject("Error: cannot get data from database. HTTP status:" + res.status));
    }

    createArticle(newArticle) {
        return this.$http({
            method: "POST",
            url: `${this.articlesApiUrl}?apiKey=${apiConstants.apiKey}`,
            data: JSON.stringify(newArticle),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback() {
            alert('New post has been Successfully added!');
        });
    }

    updateArticle(id, newArticle) {
        return this.$http({
            method: "PUT",
            url: `${this.articlesApiUrl}/${id}?apiKey=${apiConstants.apiKey}`,
            data: JSON.stringify(newArticle),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(res => this.$q.reject("Error: cannot update data in database. HTTP status:" + res.status));
    }

    deleteArticle(id) {
        return this.$http({
            method: 'DELETE',
            url: `${this.articlesApiUrl}/${id}?apiKey=${apiConstants.apiKey}`
        })
            .catch(res => this.$q.reject("Error: cannot DELETE data in database. HTTP status:" + res.status));
    }

}




