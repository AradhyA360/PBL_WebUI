function loginUser() {
  const custId = document.getElementById("custId").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const messageDiv = document.getElementById("loginMessage");

  if (!custId && !password) {
    messageDiv.innerHTML = "ID/password not valid";
    messageDiv.style.color = "red";
    return;
  }

  if (!custId.startsWith("CUST")) {
    messageDiv.innerHTML = "ID not valid";
    messageDiv.style.color = "red";
    return;
  }

  if (password.length < 5) {
    messageDiv.innerHTML = "Password not valid";
    messageDiv.style.color = "red";
    return;
  }

  messageDiv.innerHTML = "Login Successful. Redirecting...";
  messageDiv.style.color = "green";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000);
}
