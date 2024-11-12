const apiUrl = 'https://my-api.beeceptor.com/items';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById('book-list');
        data.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.innerHTML = `<a href="detail.html?id=${book.id}">${book.name}</a>`;
            bookList.appendChild(bookItem);
        });
    })
    .catch(error => console.error('Error:', error));
