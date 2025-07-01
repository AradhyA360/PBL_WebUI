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

function registerUser() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let address = document.getElementById("address").value.trim();
  let contact = document.getElementById("contact").value.trim();

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

  let custId = generateId();

  document.getElementById("ackScreen").innerHTML = `
        Customer Registration successful.<br>
        <strong>Customer ID:</strong> ${custId}<br>
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}
    `;

  document.getElementById("registrationForm").reset();
}
