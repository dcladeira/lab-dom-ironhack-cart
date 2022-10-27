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
  productTable = target.parentNode.parentNode.parentNode;
  productTable.removeChild(target.parentNode.parentNode);
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  lineNewProduct = target.parentNode.parentNode;
  productName = lineNewProduct.querySelector("[type=text]").value;
  productPrice = Number(lineNewProduct.querySelector("[type=number]").value).toFixed(2);
  // productTable = document.getElementsByTagName("tbody");
  // Não funcionaou porque pega um HTML Collection, ao invés do tbody
  productTable = document.querySelector(".product").parentNode
  const row = document.createElement("tr");
  row.className = "product"
  row.innerHTML = ` <td class="name">
                      <span>${productName}</span>
                    </td>
                    <td class="price">$<span>${productPrice}</span></td>
                    <td class="quantity">
                      <input type="number" value="0" min="0" placeholder="Quantity" />
                    </td>
                    <td class="subtotal">$<span>0</span></td>
                    <td class="action">
                      <button class="btn btn-remove">Remove</button>
                    </td>`
  // Outra solução possível seria criar cada elemento, mas como as
  // colunas são diferentes entre si, não seria usar um loop como esse,
  // teria que criar coluna por coluna, adicionando cada atributo individualmente.
  // for(let j = 0; j <= 4; j ++) {
  //   const cell = document.createElement("td");
  //   const cellText = document.createTextNode(`cell in column ${j}`);
  //   cell.appendChild(cellText);
  //   row.appendChild(cell);
  // }
  productTable.appendChild(row);
  removeBtn = row.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);
  lineNewProduct.querySelector("[type=text]").value = "";
  lineNewProduct.querySelector("[type=number]").value = 0;
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  for (i = 0; i < removeBtn.length; i++) {
    removeBtn.item(i).addEventListener('click', removeProduct);
  }
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct)
  //... your code goes here
});
