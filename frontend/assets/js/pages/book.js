const bookList = document.getElementById("bookList");

async function loadBooks() {
  const res = await fetch("https://library-management-4tz5.onrender.com/books");

  const data = await res.json();
  const books = data.books;

  if (!Array.isArray(books)) {
    console.error("Expected array, got:", books);
    return;
  }

  books.forEach((book) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.publish_year}</td>
    `;

    bookList.appendChild(tr);
  });
}

loadBooks();

async function getBookById() {
  const id = document.getElementById("bookId").value;
  if (!id) return;

  const res = await fetch(
    `https://library-management-4tz5.onrender.com/books/${id}`,
  );
  const result = await res.json();

  const book = Array.isArray(result) ? result[0] : result;

  if (!book) {
    console.error("Book not found:");
    return;
  }

  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.publish_year}</td>
  `;

  bookList.appendChild(tr);
}
