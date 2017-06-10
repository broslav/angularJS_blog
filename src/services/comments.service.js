export default function commentsService($http, apiConstants, $q) {
    const commentsApiUrl = `${apiConstants.apiUrl}collections/comments`;

    return {
        getComments,
        createComment,
        removeComment
    };

    function getComments(id) {
        return $http({
            method: "GET",
            url: `${commentsApiUrl}/?q={"id": "${id}"}&apiKey=${apiConstants.apiKey}`
        })
            .then(data => data.data)
            .catch(res => $q.reject("Error: cannot get data from database. HTTP status:" + res.status));
    }

    function createComment(newComment) {
        return $http({
            method: "POST",
            url: `${commentsApiUrl}?apiKey=${apiConstants.apiKey}`,
            data: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function successCallback() {
            alert('New comment has been Successfully added!');
        });
    }

    function removeComment(id) {
        return $http({
            method: "DELETE",
            url: `${commentsApiUrl}/${id}?apiKey=${apiConstants.apiKey}`,
        }).then(function successCallback() {
            alert('Comment has been Successfully DELETED!!!');
        });
    }
}
