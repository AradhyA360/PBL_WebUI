const cart = [
  { name: "Apples", price: 120 },
  { name: "Rice", price: 80 },
  { name: "Milk", price: 60 },
];

function loadCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("totalAmount");
  let total = 0;
  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
      <div>
        <strong>${item.name}</strong> - ₹${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalDisplay.textContent = `Total Amount: ₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  loadCart();
}

function checkout() {
  document.getElementById("checkoutMsg").textContent =
    "Order Placed Successfully!";
  setTimeout(() => {
    window.location.href = "invoice.html";
  }, 1000);
}

window.onload = loadCart;
