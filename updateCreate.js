document.getElementById("create-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const publisher = document.getElementById("publisher").value;
    const edition = document.getElementById("edition").value;
    const pages = document.getElementById("pages").value;

    const newBook = {
        name,
        author,
        publisher,
        edition,
        pages
    };

    console.log("Attempting to create a new book with data:", newBook);
    console.log("Starting fetch request...");

    fetch("https://mybooksapi.free.beeceptor.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    })
    .then(response => {
        console.log("Fetch request completed with response:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        alert("Book created successfully!");
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error("Error in fetch operation:", error);
        alert("There was an error submitting the form. Please try again.");
    });
});
