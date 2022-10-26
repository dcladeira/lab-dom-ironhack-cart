// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotalPrice = (Number(price.textContent) * quantity.value).toFixed(2)
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = subtotalPrice;
  return Number(subtotalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += updateSubtotal(products.item(i));
  }

  // ITERATION 3
  //... your code goes here
  const total = document.getElementById("total-value");
  total.innerText = `Total: \$${totalPrice.toFixed(2)}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
