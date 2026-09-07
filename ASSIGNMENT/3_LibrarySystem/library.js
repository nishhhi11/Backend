// Create a library object
const library = {
    books: [],

    // Method to add a new book
    addBook(title, author, ISBN) {
        const book = {
            title: title,
            author: author,
            ISBN: ISBN,
            isAvailable: true
        };

        this.books.push(book);
    },

    // Method to borrow a book
    borrowBook(ISBN) {
        for (let book of this.books) {
            if (book.ISBN === ISBN) {
                book.isAvailable = false;
            }
        }
    },

    // Method to return a book
    returnBook(ISBN) {
        for (let book of this.books) {
            if (book.ISBN === ISBN) {
                book.isAvailable = true;
            }
        }
    },

    // Method to display books
    displayBooks() {
        for (let book of this.books) {
            console.log(
                "Title: " + book.title +
                ", Author: " + book.author +
                ", ISBN: " + book.ISBN +
                ", Available: " + book.isAvailable
            );
        }
    }
};

library.addBook("The Alchemist", "Paulo Coelho", "101");
library.addBook("Harry Potter", "J.K. Rowling", "102");

library.borrowBook("101");

library.displayBooks();

library.returnBook("101");

library.displayBooks();