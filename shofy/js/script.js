import {shopData} from "../data/data.js";

//Aos
AOS.init();

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  // adaptiveHeight: true,
  arrows: true,
  prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
  nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
  customPaging : function(slider, i) {
    return '<div class="box"></div>';
},
});


// Products

const rowNew = document.querySelector('.products .tab-content .tab-pane .new');
const rowFeatured = document.querySelector('.products .tab-content .tab-pane .featured');
const rowSeller = document.querySelector('.products .tab-content .tab-pane .topSeller');

let newCard = '';
shopData.slice(0,8).map(item=>(
    newCard += `  
        <div class="col-sm-12 col-md-6 col-lg-3">
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
                ${item.star}
              </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowNew.innerHTML = newCard;

let featuredCard = '';
shopData.slice(8,12).map(item=>(
    featuredCard += `  
        <div class="col-sm-12 col-md-6 col-lg-3">
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
              ${item.star}
           </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowFeatured.innerHTML = featuredCard;

let sellerCard = '';
shopData.slice(2,10).map(item=>(
    sellerCard += `  
        <div class="col-sm-12 col-md-6 col-lg-3">
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
              ${item.star}
           </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowSeller.innerHTML = sellerCard;

//Product Offer
$(document).ready(function(){
  $('#lazy').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('#responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  });


// New Arrival
const scrollBoxes = document.querySelectorAll('.arrivals .main .box');
const prevButtons = document.querySelectorAll('.arrivals .head .buttons .prev');
const nextButtons = document.querySelectorAll('.arrivals .head .buttons .next');

const boxArrival = document.querySelector('.arrivals .main .box');
let boxCard = '';
shopData.slice(0,8).map(item=>(
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
              ${item.star}
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
shopData.slice(2,8).map(item=>(
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
              ${item.star}
              </div>
              <p class="card-text"><span>$<del>${item.previousPrice}</del></span> $${item.price}</p>
            </div>
          </div>
        </div> 
    `
));
rowShop.innerHTML = shopCard;


// Add to cart
const notifications = document.querySelector('.notifications');
const createToast = () => {
const toast = document.createElement('div');
toast.className = 'notification d-flex align-items-center justify-content-around';
toast.innerHTML = `
<h6 class="m-0"><i class="fa-solid fa-circle-check"></i> 1 product added to cart</h6>
`;
notifications.appendChild(toast);
setTimeout(() => {
  toast.remove(); // 
  }, 1000);
}

const buttons = document.querySelectorAll('#cart');
const cart = document.querySelector('.header .header-middle .box .carts .info .shopping-bag span');
const canvasCart = document.querySelector('.header .header-middle-canvas .menu .right .shopping-bag span');

let cartCount = parseInt(localStorage.getItem('cartCount') || 0);
cart.setAttribute('shopData-count', cartCount);
cart.innerHTML = cartCount;

canvasCart.setAttribute('shopData-count', cartCount);
canvasCart.innerHTML = cartCount;

for (const button of buttons) {
button.addEventListener("click", () => {
var add = parseInt(cart.getAttribute('shopData-count') || 0);
cartCount = add + 1;
cart.setAttribute('shopData-count', cartCount);
cart.innerHTML = cartCount;

var addCanvas = parseInt(canvasCart.getAttribute('shopData-count') || 0);
cartCount = addCanvas + 1;
canvasCart.setAttribute('shopData-count', cartCount);
canvasCart.innerHTML = cartCount;

localStorage.setItem('cartCount', cartCount);
createToast();

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




