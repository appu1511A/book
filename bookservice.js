const axios = require('axios');

const API_BASE_URL = 'https://api.example.com'; 

// Task 1: Get the Book List
async function getAllBooks() {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`);
        console.log('All Books:', response.data);
    } catch (error) {
        console.error('Error fetching all books:', error.message);
    }
}

// Task 2: Get Books by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${API_BASE_URL}/books/${isbn}`);
        console.log('Book Details (ISBN):', response.data);
    } catch (error) {
        console.error('Error fetching book by ISBN:', error.message);
    }
}

// Task 3: Get All Books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`, {
            params: { author },
        });
        console.log('Books by Author:', response.data);
    } catch (error) {
        console.error('Error fetching books by author:', error.message);
    }
}

// Task 4: Get All Books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`, {
            params: { title },
        });
        console.log('Books by Title:', response.data);
    } catch (error) {
        console.error('Error fetching books by title:', error.message);
    }
}

// Task 5: Get Book Review
async function getBookReview(bookId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/reviews/${bookId}`);
        console.log('Book Review:', response.data);
    } catch (error) {
        console.error('Error fetching book review:', error.message);
    }
}

// Task 6: Register a New User
async function registerUser(userData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
        console.log('User Registration Success:', response.data);
    } catch (error) {
        console.error('Error registering user:', error.message);
    }
}

// Task 7: Login as a Registered User
async function loginUser(credentials) {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
        console.log('User Login Success:', response.data);
    } catch (error) {
        console.error('Error logging in user:', error.message);
    }
}

// Task 8: Add or Modify a Book Review
async function addOrModifyReview(reviewData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/reviews`, reviewData);
        console.log('Review Added/Modified:', response.data);
    } catch (error) {
        console.error('Error adding/modifying review:', error.message);
    }
}

// Task 9: Delete a Book Review
async function deleteReview(reviewId) {
    try {
        const response = await axios.delete(`${API_BASE_URL}/reviews/${reviewId}`);
        console.log('Review Deleted:', response.data);
    } catch (error) {
        console.error('Error deleting review:', error.message);
    }
}

// Export all functions for reuse
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle,
    getBookReview,
    registerUser,
    loginUser,
    addOrModifyReview,
    deleteReview,
};
