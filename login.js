function togglePassword() {
  const pwdInput = document.getElementById("loginPassword");
  pwdInput.type = pwdInput.type === "password" ? "text" : "password";
}

function loginUser(event) {
  event.preventDefault();

  const enteredId = document.getElementById("custId").value.trim();
  const enteredPassword = document.getElementById("loginPassword").value.trim();
  const popup = document.getElementById("loginPopup");

  const user = JSON.parse(localStorage.getItem("registeredUser"));

  if (!user) {
    popup.innerHTML = `<h3>Error</h3><p>No user registered yet. Please register first.</p>`;
    popup.style.display = "block";
    return;
  }

  if (enteredId === user.customerId && enteredPassword === user.password) {
    document.getElementById("loginMessage").innerHTML =
      "Login Successful. Redirecting...";
    document.getElementById("loginMessage").style.color = "green";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  } else {
    popup.innerHTML = `<h3>Login Failed</h3><p>Invalid ID or Password. Please try again.</p>`;
    popup.style.display = "block";
  }
}
