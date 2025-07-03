let selectedPayment = null;

function selectOption(element, method) {
  // Unselect all
  document
    .querySelectorAll(".option")
    .forEach((opt) => opt.classList.remove("selected"));
  // Select the clicked one
  element.classList.add("selected");
  selectedPayment = method;
}

function proceedToPay() {
  const confirmationBox = document.getElementById("confirmationBox");

  if (!selectedPayment) {
    alert("Please select a payment method before proceeding.");
    return;
  }

  confirmationBox.innerHTML = `
    <h3>Payment Confirmed!</h3>
    <p>You selected <strong>${selectedPayment}</strong> as your payment method.</p>
    <p>Your order has been placed successfully.</p>
  `;

  confirmationBox.style.display = "block";

  // Optional: clear cart, redirect etc.
  // localStorage.removeItem('cart');
  // setTimeout(() => window.location.href = 'home.html', 3000);
}
