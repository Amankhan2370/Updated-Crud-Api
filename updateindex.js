document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");

    fetch("https://mybooksapi.free.beeceptor.com")

        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); // Check the structure of the response
            const books = Array.isArray(data) ? data : data.books || [];  // Adjust if the API response is nested

            if (books.length > 0) {
                books.forEach(book => {
                    const bookItem = document.createElement("div");
                    bookItem.innerHTML = `
                        <a href="detail.html?id=${book.id}">${book.name}</a>
                        <p>Author: ${book.author}</p>
                        <p>Publisher: ${book.publisher}</p>
                        <p>Edition: ${book.edition}</p>
                        <p>Pages: ${book.pages}</p>
                    `;
                    bookList.appendChild(bookItem);
                });
            } else {
                bookList.innerHTML = "<p>No books available at the moment.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching books:", error);
            bookList.innerHTML = "<p>Error loading books. Please try again later.</p>";
        });
});
