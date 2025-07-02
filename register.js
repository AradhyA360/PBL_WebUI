function generateId() {
  return "CUST" + Math.floor(Math.random() * 1000000);
}

function validateName(name) {
  return /^[A-Za-z ]+$/.test(name);
}

function validateEmail(email) {
  return /.+@.+\..+/.test(email);
}

function validatePassword(pwd) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{5,}$/.test(pwd);
}

function validateContact(contact) {
  return /^[0-9]{10}$/.test(contact);
}

function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const address = document.getElementById("address").value.trim();
  const contact = document.getElementById("contact").value.trim();

  if (!name || !validateName(name)) {
    alert("Customer Name must have alphabets only and must not be blank.");
    return;
  }
  if (!email || !validateEmail(email)) {
    alert("Email id not valid.");
    return;
  }
  if (!password || !validatePassword(password)) {
    alert("Password is not matching the criteria.");
    return;
  }
  if (!address) {
    alert("Address must not be blank.");
    return;
  }
  if (!contact || !validateContact(contact)) {
    alert("Contact number must be 10 digits and numeric only.");
    return;
  }

  const custId = generateId();

  // Save to localStorage
  const userData = {
    customerId: custId,
    name: name,
    email: email,
    address: address,
    contact: contact,
  };
  localStorage.setItem("registeredUser", JSON.stringify(userData));

  // Reset form and disable button
  document.getElementById("registerForm").reset();
  document.getElementById("registerBtn").disabled = true;

  // Show popup acknowledgement
  const popup = document.getElementById("popupContainer");
  popup.style.display = "block";
  let countdown = 60;
  popup.innerHTML = `
                <h3>Registration Successful!</h3>
                <p><strong>Customer ID:</strong> ${custId}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p>Redirecting to login page in <span id="timer">${countdown}</span> seconds...</p>
            `;

  const interval = setInterval(() => {
    countdown--;
    document.getElementById("timer").innerText = countdown;
    if (countdown === 0) {
      clearInterval(interval);
      window.location.href = "login.html";
    }
  }, 1000);
}
