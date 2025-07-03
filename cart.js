let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("totalAmount");
  let total = 0;
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "Total Amount: ₹0";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
          <div class="cart-item">
            <strong>${item.name}</strong> - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
          </div>
        `;
  });

  totalDisplay.textContent = `Total Amount: ₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function checkout() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser || !currentUser.customerId) {
    alert("Please login before proceeding to checkout.");
    window.location.href = "login.html";
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty. Add items before proceeding.");
    return;
  }

  document.getElementById("checkoutMsg").textContent =
    "Redirecting to Payment Gateway...";

  setTimeout(() => {
    window.location.href = "payment.html";
  }, 2000);
}

window.onload = loadCart;
