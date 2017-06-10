export default articlesService;

function articlesService(apiConstants, $q, $http) {
    const articlesApiUrl = `${apiConstants.apiUrl}collections/articles`;
    // const commentsApiUrl = `${apiConstants.apiUrl}collections/comments`;

    return {
        //getArticleById,
        getArticles,
        getArticleById,
        createArticle,
        getArticleByUserName,
        deleteArticle,
        updateArticle
    };


    function getArticles() {
        return $http({
            method: "GET",
            url: `${articlesApiUrl}?apiKey=${apiConstants.apiKey}`
        })
            .then(data => data.data)
            .catch(res => $q.reject("Error: cannot create data from database. HTTP status:" + res.status));
    }

    function getArticleById(id) {
        return $http({
            method: "GET",
            url: `${articlesApiUrl}/${id}?apiKey=${apiConstants.apiKey}`
        })
            .then(data => data.data)
            .catch(res => $q.reject("Error: cannot get data from database. HTTP status:" + res.status));
    }

    function getArticleByUserName(name) {
        return $http({
            method: "GET",
            url: `${articlesApiUrl}/?q={"author": "${name}"}&apiKey=${apiConstants.apiKey}`
        })
            .then(data => data.data)
            .catch(res => $q.reject("Error: cannot get data from database. HTTP status:" + res.status));
    }

    function createArticle(newArticle) {
        return $http({
            method: "POST",
            url: `${articlesApiUrl}?apiKey=${apiConstants.apiKey}`,
            data: JSON.stringify(newArticle),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback() {
            alert('New post has been Successfully added!');
        });
    }

    function updateArticle(id, newArticle) {
        return $http({
            method: "PUT",
            url: `${articlesApiUrl}/${id}?apiKey=${apiConstants.apiKey}`,
            data: JSON.stringify(newArticle),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(res => $q.reject("Error: cannot update data in database. HTTP status:" + res.status));
    }

    function deleteArticle(id) {
        return $http({
            method: 'DELETE',
            url: `${articlesApiUrl}/${id}?apiKey=${apiConstants.apiKey}`
        })
            .catch(res => $q.reject("Error: cannot DELETE data in database. HTTP status:" + res.status));
    }

}



