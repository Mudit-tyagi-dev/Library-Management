async function getuserdata() {
  const res = await fetch("https://library-management-4tz5.onrender.com");
  const result = await res.json();
  const users = result.users;
  // console.log(result);
   if (!users || users.length === 0) {
    userList.innerHTML = `<div class="error-message">no user yet</div>`;
    return;
  }
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    userList.innerHTML += `
      <div class="user-card">
        <div class="user-info">
          <h3>ID: ${user.users_id}</h3>
          <p>${user.name}</p>
          <p>Email: ${user.email}</p>
        </div>
        <button onclick="deleteUser(${user.id})">Remove</button>
      </div>
    `;
  });
}
getuserdata();

async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch("https://library-management-4tz5.onrender.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  getuserdata(); 
}

// let deleteUserId = null;

// function deleteUser(id) {
//   deleteUserId = id;
//   document.getElementById("deleteModal").style.display = "flex";
// }

// function closeModal() {
//   deleteUserId = null;
//   document.getElementById("deleteModal").style.display = "none";
// }

// async function confirmDelete() {
//   await fetch(`http://localhost:5000/users/${deleteUserId}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   });

//   closeModal();
//   getuserdata(); // 🔥 re-fetch
// }
async function getUserById() {
  const id = document.getElementById("searchId").value;
  const userList = document.getElementById("userList");

  userList.innerHTML = "";

  const res = await fetch(`https://library-management-4tz5.onrender.com/users/${id}`);
  const result = await res.json();

  const user = result[0]; // single object

  if (!user) {
    userList.innerHTML = `<div class="error-message">User not found</div>`;
    return;
  }

  userList.innerHTML = `
    <div class="user-card">
      <div class="user-info">
        <h3>ID: ${user.users_id}</h3>
        <p>${user.name}</p>
        <p>Email: ${user.email}</p>
      </div>
      <button onclick="deleteUser(${user.users_id})">Remove</button>
    </div>
  `;
}
getUserById();