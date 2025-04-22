let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  const totalSpan = document.getElementById("total");

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${item.product} - $${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalSpan.innerText = total;
}
