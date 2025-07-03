function togglePassword() {
  const pwdInput = document.getElementById("loginPassword");
  pwdInput.type = pwdInput.type === "password" ? "text" : "password";
}

function loginUser() {
  const custId = document.getElementById("custId").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (!registeredUser || !registeredUser.customerId) {
    alert("ID not valid.");
    return;
  }

  if (
    custId !== registeredUser.customerId &&
    password !== registeredUser.password
  ) {
    alert("ID/Password not valid.");
    return;
  }

  if (custId !== registeredUser.customerId) {
    alert("ID not valid.");
    return;
  }

  if (password !== registeredUser.password) {
    alert("Password not valid.");
    return;
  }

  // ✅ Mark user as logged in
  localStorage.setItem("currentUser", JSON.stringify(registeredUser));

  alert("Login successful!");
  window.location.href = "home.html";
}
