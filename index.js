const {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle,
    getBookReview,
    registerUser,
    loginUser,
    addOrModifyReview,
    deleteReview,
} = require('./bookservice');

getAllBooks();

getBookByISBN('123456789');

getBooksByAuthor('J.K. Rowling');

getBooksByTitle('Harry Potter');

getBookReview('book-id');

registerUser({
    username: 'newuser',
    email: 'newuser@example.com',
    password: 'securepassword',
});

loginUser({
    email: 'newuser@example.com',
    password: 'securepassword',
});

addOrModifyReview({
    bookId: 'book-id',
    review: 'This book is fantastic!',
    rating: 5,
});

deleteReview('review-id');
