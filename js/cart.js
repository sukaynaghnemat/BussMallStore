/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // console.log(cart);
}
let coun = JSON.parse(localStorage.cart);
console.log(coun.length);
document.getElementById('itemCount').textContent = coun.length;
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {

  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tBody = table.getElementsByTagName('tbody')[0];// geeting the table body and seeting its value to empty string
  tBody.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tBody = table.getElementsByTagName('tbody')[0];//geeting the table body
  // TODO: Iterate over the items in the cart
  let data = JSON.parse(localStorage.getItem('cart'));//geeting the table contant form the local storge
  let tr;
  let td1;
  let td2;
  let td3;

  for (let i = 0; i < data.length; i++) {// filling the table with the data from the local storge
    tr = document.createElement('tr');//creating table row
    tBody.appendChild(tr);
    td1 = document.createElement('td');// creating 3 table data to set the value on it 
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td1.textContent = 'X';//seeting the data
    td2.textContent = data[i].quantity;
    td3.textContent = data[i].product;
  }


  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {// we have tride to remove the selected item but we just find a way to remove the fist row form the table.
  console.log(event)
  let itemDel;
  let allData = JSON.parse(localStorage.getItem('cart'));
  console.log(allData);
  for (let i =0; i < allData.length ; i++){
    if (event.target.innerHTML === 'X') {
    itemDel = event.target.nextSibling.nextSibling.innerHTML;
    console.log(itemDel);
  }
  }
  cart.removeItem(itemDel);
  cart.saveToLocalStorage();
  clearCart();
  showCart();

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();