"use strict";

// changing active profile slide//
function showContent(contentType) {
  document.querySelectorAll(".cell").forEach(function (cell) {
    cell.classList.remove("active");
  });

  document.querySelectorAll(".adminContent > div").forEach(function (content) {
    content.classList.remove("active-content");
  });

  document
    .querySelector("." + contentType + "-content")
    .classList.add("active-content");
  document.querySelector("." + contentType).classList.add("active");
}
// redirect to home page//////////////////////////
// Get a reference to the div element
var myDiv = document.getElementById("home");

// Add a click event listener to the div
myDiv.addEventListener("click", function () {
  // Redirect to the desired page
  window.location.href = "main.html"; // Replace with your desired URL
});
/////////////////////////////////////////////////
const getProducts = async function () {
  const productsArr = [];
  const response = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await response.json();
  productsArr.push(data);
  return productsArr;
};

const displayOnPage = async () => {
  const mainProductContainer = document.getElementById("main-container");
  const products = await getProducts();
  for (const product of products[0]) {
    mainProductContainer.innerHTML += `
              <div class="single-product" data-id="${product.id}">
                  <div class="icons-container">
                      <img src="../images/icons8-add-50.png" alt="add icon" id="add-btn">
                      <img src="../images/eye (1).png" alt="eye icon" id="eye-btn">
                  </div>
                  <div class="product-img-container">
                      <img src="${product.image}" alt="${product.title}">
                  </div>
                  <p class="product-category">${product.category}</p>
                  <p class="product-title">${product.title}</p>
                  <p class="product-price">${product.price}</p>
              </div>
          `;
  }
  const addBtns = document.querySelectorAll("#add-btn");
  for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener("click", addToCart);

    function addToCart(e) {
      let counter = 0;
      for (const product of products[0]) {
        const currentelement = e.target.parentElement.parentElement;
        if (parseInt(currentelement.getAttribute("data-id")) === product.id) {
          cartItems.push(product);
          if (cartItems.includes(product)) {
            cartItems.push({
              ...product,
              count: counter++,
            });
          }
          updateCartDisplay();
        }
      }
    }
  }
};
displayOnPage();
