// api.js

// Function to set the Authorization header for Axios requests
export function setAuthHeader() {
    const token = localStorage.getItem('access_token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

// Function to fetch user data
export function getUserData() {
    return axios.get('http://127.0.0.1:5000/user')
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching user data:', error);
            throw error; // Propagate the error to the caller
        });
}
