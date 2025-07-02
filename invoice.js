window.onload = () => {
  const invoiceDiv = document.getElementById("invoice-details");
  const invoiceItems = [
    { name: "Apples", price: 120 },
    { name: "Rice", price: 80 },
    { name: "Milk", price: 60 },
  ];
  let total = 0;
  invoiceItems.forEach((item) => {
    total += item.price;
    invoiceDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });
  invoiceDiv.innerHTML += `<hr><p><strong>Total:</strong> ₹${total}</p>`;
};
