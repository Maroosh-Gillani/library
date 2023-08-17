document.addEventListener('DOMContentLoaded', function () {
    const myLibrary = [];

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

        library.forEach((book, index) => {
            const displayBookDiv = document.createElement("div");
            displayBookDiv.className = "book";

            const bookTitle = document.createElement("h2");
            bookTitle.textContent = book.name;

            const bookAuthor = document.createElement("p");
            bookAuthor.textContent = `Author: ${book.author}`;

            const bookPages = document.createElement("p");
            bookPages.textContent = `Pages: ${book.pages}`;

            const bookStatus = document.createElement("p");
            bookStatus.textContent = `Status: ${book.status}`;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener('click', () => {
                removeBook(index);
                displayBookDiv.innerHTML = '';
                console.log(myLibrary)
            });

            const changeStatusButton = document.createElement("button");
            if (book.status === "read") changeStatusButton.textContent = "Unread";
            if (book.status === "unread") changeStatusButton.textContent = "Read";
            changeStatusButton.addEventListener('click', () => {
                if (book.status === "read") {
                    book.status = "unread";
                    changeStatusButton.textContent = "Read";
                    bookStatus.textContent = `Status: ${book.status}`;
                } else if (book.status === "unread") {
                    book.status = "read";
                    changeStatusButton.textContent = "Unread";
                    bookStatus.textContent = `Status: ${book.status}`;
                }
            });

            displayBookDiv.appendChild(bookTitle);
            displayBookDiv.appendChild(bookAuthor);
            displayBookDiv.appendChild(bookPages);
            displayBookDiv.appendChild(bookStatus);
            displayBookDiv.appendChild(changeStatusButton);
            displayBookDiv.appendChild(removeButton);

            container.appendChild(displayBookDiv);
        });
    }

    function removeBook(index) {
        myLibrary.splice(index, 1);
    }

    const newBookButton = document.querySelector(".new-book-button");
    const sidebar = document.querySelector(".sidebar");
    const bookForm = document.querySelector(".book-form")

    newBookButton.addEventListener('click', function () {
        sidebar.classList.toggle("show");
        // Bring up the form sidebar
    });

    bookForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const bookName = document.getElementById("bookName").value;
        const author = document.getElementById("bookAuthor").value;
        const pages = parseInt(document.getElementById("bookPages").value);
        const status = document.getElementById("bookStatus").value;

        addBookToLibrary(bookName, author, pages, status);

        bookForm.reset();

        sidebar.classList.remove("show");

        // Clear the container before re-rendering the books
        const container = document.querySelector(".container");
        container.innerHTML = '';

        displayBooks(myLibrary);
    });
});