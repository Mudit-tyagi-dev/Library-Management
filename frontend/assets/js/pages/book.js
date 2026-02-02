const bookList = document.getElementById("bookList");

async function loadBooks() {
  const res = await fetch("http://localhost:5000/books");
  const result = await res.json();

  // console.log(result);

  const books = result.books; 

  books.forEach(book => {
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

  const res = await fetch(`http://localhost:5000/books/${id}`);
  const result = await res.json();


  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  const book = result[0];

  if (!book) {
    bookList.innerHTML = `<tr><td colspan="3">Book not found</td></tr>`;
    return;
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.publish_year}</td>
  `;

  bookList.appendChild(tr);
}
getBookById()
