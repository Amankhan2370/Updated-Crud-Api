const createForm = document.getElementById('create-form');

createForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const newBook = {
        name: document.getElementById('name').value.trim(),
        author: document.getElementById('author').value.trim(),
        publisher: document.getElementById('publisher').value.trim(),
        edition: document.getElementById('edition').value.trim(),
        pages: document.getElementById('pages').value.trim()
    };

    if (!newBook.name || !newBook.author || !newBook.publisher || !newBook.edition || !newBook.pages) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const response = await fetch('https://crudapi.free.beeceptor.com/api/post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        });

        if (!response.ok) {
            throw new Error('Failed to create the item. Please check the API.');
        }

        alert('Book created successfully!');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});
