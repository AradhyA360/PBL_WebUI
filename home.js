// home.js

// Product data
const products = [
  { name: "Apple", price: 120 },
  { name: "Milk", price: 60 },
  { name: "Rice", price: 80 },
];

// Attach Add to Cart logic to buttons
window.onload = function () {
  const buttons = document.querySelectorAll(".product button");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(products[index]);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${products[index].name} added to cart!`);
    });
  });
};
