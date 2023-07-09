import {data} from "../data/data.js";

// Products

const rowNew = document.querySelector('.products .tab-content .tab-pane .new');
const rowFeatured = document.querySelector('.products .tab-content .tab-pane .featured');
const rowSeller = document.querySelector('.products .tab-content .tab-pane .topSeller');

let newCard = '';
data.slice(0,8).map(item=>(
    newCard += `  
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
         <div class="card" >
            <div class="card-img-top">
              <img  src="${item.image}">
              <div class="icons">
                <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
                <div class="eye"> <i class="fa-regular fa-eye"></i></div>
                <div class="heart"> <i class="fa-regular fa-heart"></i></div>
              </div>
            </div>
            <div class="card-body">
              <p class="txt">${item.category}</p>
              <h5 class="card-title">${item.title}</h5>
              <div class="stars">
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
              </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowNew.innerHTML = newCard;

let featuredCard = '';
data.slice(8,12).map(item=>(
    featuredCard += `  
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
         <div class="card" >
         <div class="card-img-top">
           <img  src="${item.image}">
           <div class="icons">
             <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
             <div class="eye"> <i class="fa-regular fa-eye"></i></div>
             <div class="heart"> <i class="fa-regular fa-heart"></i></div>
           </div>
         </div>
            <div class="card-body">
              <p class="txt">${item.category}</p>
              <h5 class="card-title">${item.title}</h5>
              <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
           </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowFeatured.innerHTML = featuredCard;

let sellerCard = '';
data.slice(12,20).map(item=>(
    sellerCard += `  
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
         <div class="card" >
         <div class="card-img-top">
            <img  src="${item.image}">
            <div class="icons">
            <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
            <div class="eye"> <i class="fa-regular fa-eye"></i></div>
            <div class="heart"> <i class="fa-regular fa-heart"></i></div>
          </div>
         </div>
            <div class="card-body">
            <p class="txt">${item.category}</p>
              <h5 class="card-title">${item.title}</h5>
              <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
           </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowSeller.innerHTML = sellerCard;

//Product Offer
const offerProduct = document.querySelector('.product-offer .main .box');
let offerCard = '';
data.slice(0,3).map(item=>(
  offerCard += `  
         <div class="card me-2" >
         <div class="card-img-top">
            <img  src="${item.image}">
            <div class="icons">
            <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
            <div class="eye"> <i class="fa-regular fa-eye"></i></div>
            <div class="heart"> <i class="fa-regular fa-heart"></i></div>
          </div>
         </div>
            <div class="card-body">
            <p class="txt">${item.category}</p>
              <h5 class="card-title">${item.title}</h5>
              <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
           </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
       
    `
));
offerProduct.innerHTML = offerCard;

// New Arrival
const scrollBoxes = document.querySelectorAll('.arrivals .main .box');
const prevButtons = document.querySelectorAll('.arrivals .head .buttons .prev');
const nextButtons = document.querySelectorAll('.arrivals .head .buttons .next');

const boxArrival = document.querySelector('.arrivals .main .box');
let boxCard = '';
data.slice(0,8).map(item=>(
    boxCard += `  
         <div class="card" >
         <div class="card-img-top">
            <img  src="${item.image}">
            <div class="icons">
            <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
            <div class="eye"> <i class="fa-regular fa-eye"></i></div>
            <div class="heart"> <i class="fa-regular fa-heart"></i></div>
          </div>
         </div>
            <div class="card-body">
            <p class="txt">${item.category}</p>
              <h5 class="card-title">${item.title}</h5>
              <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
           </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
       
    `
));
boxArrival.innerHTML = boxCard;

// Shop

const rowShop = document.querySelector('.shop .box .row');
let shopCard = '';
data.slice(12,18).map(item=>(
  shopCard += `  
        <div class="col-sm-12 col-md-6 col-lg-4">
         <div class="card" >
            <div class="card-img-top">
              <img  src="${item.image}">
              <div class="icons">
                <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
                <div class="eye"> <i class="fa-regular fa-eye"></i></div>
                <div class="heart"> <i class="fa-regular fa-heart"></i></div>
              </div>
            </div>
            <div class="card-body">
              <p class="txt">${item.category}</p>
              <h5 class="card-title">${item.title}</h5>
              <div class="stars">
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
              </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowShop.innerHTML = shopCard;


// Add to cart
const buttons = document.querySelectorAll('#cart');
const cart = document.querySelector('.header .header-middle .box .carts .info .shopping-bag span');
const canvasCart = document.querySelector('.header .header-middle-canvas .menu .right .shopping-bag span');

let cartCount = parseInt(localStorage.getItem('cartCount') || 0);
cart.setAttribute('data-count', cartCount);
cart.innerHTML = cartCount;

canvasCart.setAttribute('data-count', cartCount);
canvasCart.innerHTML = cartCount;

for (const button of buttons) {
button.addEventListener("click", () => {
var add = parseInt(cart.getAttribute('data-count') || 0);
cartCount = add + 1;
cart.setAttribute('data-count', cartCount);
cart.innerHTML = cartCount;

var addCanvas = parseInt(canvasCart.getAttribute('data-count') || 0);
cartCount = addCanvas + 1;
canvasCart.setAttribute('data-count', cartCount);
canvasCart.innerHTML = cartCount;

localStorage.setItem('cartCount', cartCount);

});
}


// New Arrival Scroll

scrollBoxes.forEach((scrollBox, i) => {
let containerDimensions = scrollBox.getBoundingClientRect();
let containerWidth = containerDimensions.width/4;

nextButtons[i].addEventListener('click', () => {
scrollBox.scrollLeft += containerWidth;
});

prevButtons[i].addEventListener('click', () => {
scrollBox.scrollLeft -= containerWidth;
});
});




