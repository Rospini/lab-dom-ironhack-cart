
// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  //let value = quantity.getAttribute(‘value’);
  let total = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  
  subtotal.innerHTML = total;
  


  return total;
}


  // ITERATION 2

function calculateAll() {
  let products = document.querySelectorAll('.product ');
  
  let total1 = 0;
  
  products.forEach((el) => {
    updateSubtotal(el);
    total1 += updateSubtotal(el);
  });

  let calculate = document.querySelector('h2 span');
  calculate.innerHTML = total1;
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
