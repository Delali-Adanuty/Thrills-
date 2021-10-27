const products = document.querySelectorAll('div.products-section ul.products li.card');
const addToCartBtns = document.querySelectorAll('div.products-section ul.products li.card button.add-to-cart');
const backArrow = document.querySelector('div.shopping-cart div.cart-heading ul.left li');
const cartBtn = document.querySelector('nav.top-nav ul.right li');
const cart = document.querySelector('div.shopping-cart')
cart.style.display = "none"
cartBtn.addEventListener('click', showCart)
backArrow.addEventListener('click', removeCart);

for(f = 0; f < products.length; f++){
    products[f].addEventListener('mouseover', showBtn);
    products[f].addEventListener('mouseout', removeBtn)
    addToCartBtns[f].style= "visibility:hidden"
}

function showBtn(){
    var elemIndex= Array.prototype.indexOf.call(products, this)
    addToCartBtns[elemIndex].style = "visibility:visible"
}

function removeBtn(){
    var elemIndex = Array.prototype.indexOf.call(products, this);
    addToCartBtns[elemIndex].style = "visibility:hidden"
}

function removeCart(){
    cart.style.display = "none"
}

function showCart(){
    cart.style.display = "block"
}
/*
var meemaw = document.createElement('button');
meemaw.dataFeather = "circle"
meemaw.innerHTML = "<i data-feather='circle'></i>"
console.log(meemaw.dataFeather)
document.body.appendChild(meemaw);
document.querySelector('div.shopping-cart').appendChild(meemaw)*/