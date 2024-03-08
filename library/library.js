let library = {
    books: [],

    addBook: function(title, author, bookId) {
        let book = {
            title: title,
            author: author,
            bookId: bookId,
            availabilty: true 
        };
        this.books.push(book);
        console.log(`${title} by ${author} added to our library.`);
    },

    borrowBook: function(bookId) {
        
        let bookFound = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookId === bookId && this.books[i].availabilty) {
                this.books[i].availabilty = false; 
                console.log(`Your borrow was successful ${this.books[i].title} by ${this.books[i].author}`);
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("Book borrow failed");
        }
    },

    returnBook: function(bookId) {
        let bookFound = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookId === bookId && !this.books[i].availabilty) {
                this.books[i].availabilty = true; 
                console.log(`Book returned successful ${this.books[i].title} by ${this.books[i].author}`);
                bookFound = true;
                break;
            }
        }
        if (!bookFound) {
            console.log("Book return failed");
        }
    },

    displayBooks: function() {
        console.log("Books availabilty in the library:");
        this.books.forEach(function(book) {
            console.log(`${book.title} by ${book.author} (BOOK ID: ${book.bookId}) - availabilty: ${book.availabilty ? 'Yes' : 'No'}`);
        });
    }
};

library.addBook("How to Read a Book", "MORTIMER J. ADLER", "1234");
library.addBook("ELOQUENT JAVASCRIPT", "Marjin Haverbeke", "1234");
library.addBook("Scope and Closures JS", "kyle Simpson", "1234");
library.displayBooks();
library.borrowBook("1234");
library.displayBooks();
library.returnBook("1234");
library.displayBooks();
