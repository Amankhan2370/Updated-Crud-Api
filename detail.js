const params = new URLSearchParams(window.location.search);
const bookId = params.get('id');
const detailUrl = `https://my-api.beeceptor.com/items/${bookId}`;

fetch(detailUrl)
    .then(response => response.json())
    .then(book => {
        const bookDetails = document.getElementById('book-details');
        bookDetails.innerHTML = `
            <p>Name: ${book.name}</p>
            <p>Author: ${book.author}</p>
            <p>Publisher: ${book.publisher}</p>
            <p>Edition: ${book.edition}</p>
            <p>Pages: ${book.pages}</p>
        `;
    })
    .catch(error => console.error('Error:', error));
