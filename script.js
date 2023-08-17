document.addEventListener('DOMContentLoaded', function () {
    // const myLibrary = [];

    function Book(name, author, pages, status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    function addBookToLibrary(name, author, pages, status) {
        const newBook = new Book(name, author, pages, status);
        myLibrary.push(newBook);
    }

    function displayBooks(library) {
        const container = document.querySelector(".container");

        library.forEach(book => {
            const displayBookDiv = document.createElement("div");
            displayBookDiv.className = "book";

            const bookTitle = document.createElement("h2");
            bookTitle.textContent = book.name;

            const bookAuthor = document.createElement("p");
            bookAuthor.textContent = `Author: ${book.author}`;

            const bookPages = document.createElement("p");
            bookPages.textContent = `Pages: ${book.pages}`;

            // Make this a checkList kinda thing?
            // const bookStatus = document.createElement("");

            displayBookDiv.appendChild(bookTitle);
            displayBookDiv.appendChild(bookAuthor);
            displayBookDiv.appendChild(bookPages);

            container.appendChild(displayBookDiv);
        });
    }

    const newBookButton = document.querySelector(".new-book-button");

    const myLibrary = [
        { name: "Book 1", author: "Author 1", pages: 200 },
        { name: "Book 2", author: "Author 2", pages: 300 }
    ];
    displayBooks(myLibrary);
});