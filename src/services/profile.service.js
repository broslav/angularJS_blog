export default function profileService($http, apiConstants) {
    const userApiUrl = `${apiConstants.apiUrl}collections/users`;

    return {
        getCurrentUserId() {
            return localStorage.getItem('userId');
        },
        getCurrentUser() {
            const userId = this.getCurrentUserId();
            if(userId) {
                return $http({
                    method: "GET",
                    url: `${userApiUrl}/${userId}?apiKey=${apiConstants.apiKey}`
                })
                    .then(response => response.data);
            }
        },
        setCurrentUser(userId) {
            localStorage.getItem(userId);
        }
    }
}