const library = {
    books: [],

    addBook(title, author, ISBN) {
        const book = {
            title: title,
            author: author,
            ISBN: ISBN,
        };

        this.books.push(book);
    },

    borrowBook(ISBN) {
        for (let book of this.books) {
            if (book.ISBN === ISBN) {
                book.isAvailable = false;
            }
        }
    },

    returnBook(ISBN) {
        for (let book of this.books) {
            if (book.ISBN === ISBN) {
                book.isAvailable = true;
            }
        }
    },

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