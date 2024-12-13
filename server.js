const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Port for your API

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock data
const books = [
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', isbn: '123456789', reviews: [] },
    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '987654321', reviews: [] },
];

// Routes

// Task 1: Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Task 2: Get book by ISBN
app.get('/books/:isbn', (req, res) => {
    const book = books.find((b) => b.isbn === req.params.isbn);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Task 3: Get books by author
app.get('/books/author/:author', (req, res) => {
    const authorBooks = books.filter((b) => b.author.toLowerCase() === req.params.author.toLowerCase());
    res.json(authorBooks);
});

// Task 4: Get books by title
app.get('/books/title/:title', (req, res) => {
    const titleBooks = books.filter((b) => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    res.json(titleBooks);
});

// Task 5: Add a book review
app.post('/reviews/:isbn', (req, res) => {
    const { review } = req.body;
    const book = books.find((b) => b.isbn === req.params.isbn);

    if (book) {
        book.reviews.push(review);
        res.json({ message: 'Review added', reviews: book.reviews });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
