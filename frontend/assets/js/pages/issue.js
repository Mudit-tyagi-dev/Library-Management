// alert("issue.js loaded");

async function fetchBooks() {
  const res = await fetch("http://localhost:5000/books");
  const result = await res.json();
  const bookList = document.getElementById("bookList");
  const books = result.books;
  bookList.innerHTML = "<h1>Book List</h1>";
  books.forEach((book) => {
    bookList.innerHTML += `
        <div class="book-card">
          <h3>${book.title}</h3>
          <p><strong>ID:</strong> ${book.id}</p>
          <p><strong>Author:</strong> ${book.author}</p>
          <p>
            <strong>Available Copies:</strong>
            <span class="${book.copies > 0 ? "available" : "not-available"}">
              ${book.copies}
            </span>
          </p>
        </div>
      `;
  });
}
fetchBooks();
async function issueBook() {
  const userId = Number(document.getElementById("userId").value);
  const bookId = Number(document.getElementById("bookId").value);
  const msgBox = document.getElementById("issueMsg");

  msgBox.innerHTML = ""; // clear old message

  const res = await fetch("http://localhost:5000/issuedbooks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, bookId }),
  });

  const result = await res.json();

  if (!res.ok) {
    msgBox.innerHTML = `<p class="msg-error">${result.error}</p>`;
    return;
  }

  msgBox.innerHTML = `<p class="msg-success">✅ Book issued successfully</p>`;

  document.getElementById("userId").value = "";
  document.getElementById("bookId").value = "";

  getIssuedBooks(); // refresh list
}

// document.addEventListener("DOMContentLoaded", () => {
//   const issuelist = document.getElementById("issuelist");
//   issuelist.innerHTML = "<h2>JS CAN WRITE HERE</h2>";
// });
// async function getIssuedBooks() {
//   const res = await fetch("http://localhost:5000/issuedbooks");
//   const data = await res.json();

//   console.log("API DATA:", data);

//   const issuelist = document.getElementById("issuelist");
//   issuelist.innerHTML = `
//     <pre>${JSON.stringify(data, null, 2)}</pre>
//   `;
// }
// getIssuedBooks();
async function getIssuedBooks() {
  const res = await fetch("http://localhost:5000/issuedbooks");
  const data = await res.json();

  const issuelist = document.getElementById("issuelist");
  issuelist.innerHTML = " <h1>Issued Books</h1>";

  if (!Array.isArray(data) || data.length === 0) {
    issuelist.innerHTML = "<p>No issued books</p>";
    return;
  }

  data.forEach((issue) => {
    issuelist.innerHTML += `
      <div class="book-card">
        <p><strong>User ID:</strong> ${issue.userId}</p>
        <p><strong>Book ID:</strong> ${issue.bookId}</p>
        <p><strong>Issue Date:</strong> ${new Date(issue.issueDate).toDateString()}</p>
        <p><strong>Return Date:</strong> ${new Date(issue.returnDate).toDateString()}</p>
      </div>
    `;
  });
}

// load list on page open
getIssuedBooks();
