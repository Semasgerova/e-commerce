import { data } from "../data/data.js";

var productCount = parseInt(localStorage.getItem("cartCount") || 0);

document.getElementById("productCount").innerText = productCount;
document.getElementById("count").innerText = productCount;
const row = document.querySelector(".products .bottom .row");
let card = "";
data.map(
  (item) =>
    (card += `  
    <div class="cols col-sm-12 col-md-6 col-lg-4">
      <div class="d-flex justify-content-center w-100">
      <div class="card" >
      <div class="card-img-top">
         <img  src="${item.image}">
         <div class="icons">
         <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
         <div class="eye"> <i class="fa-regular fa-eye"></i></div>
         <div class="heart"> <i class="fa-regular fa-heart"></i></div>
         <div class="compare"> <i class="fa-solid fa-code-compare"></i></div>
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
    </div>
    `)
);
row.innerHTML = card;

const carts = document.querySelectorAll("#cart");

for (const cart of carts) {
  cart.addEventListener("click", () => {
    localStorage.setItem("cartCount", parseInt(productCount) + 1);
    document.getElementById("productCount").innerText = productCount;
    document.getElementById("count").innerText = productCount;
    window.location.reload();
  });
}

const colOneByOne = document.querySelector(".products .top .boxes .col1");
const colThreeByThree = document.querySelector(".products .top .boxes .col3");

colOneByOne.addEventListener("click", () => {
  let card = "";
  data.map(
    (item) =>
      (card += `  
      <div class="cols col-sm-12">
        <div class="cards">
        <div class="card-img-top">
           <img  src="${item.image}">
           <div class="icons">
           <div class="eye"> <i class="fa-regular fa-eye"></i></div>
           <div class="heart"> <i class="fa-regular fa-heart"></i></div>
           <div class="compare"> <i class="fa-solid fa-code-compare"></i></div>
           </div>
        </div>
           <div class="card-body d-flex flex-column justify-content-end">
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
             <div class="btn" id="cart">Add to cart</div>
           </div>
           
        </div>
      </div>
      `)
  );
  row.innerHTML = card;

  const carts = document.querySelectorAll("#cart");
  for (const cart of carts) {
    cart.addEventListener("click", () => {
      localStorage.setItem("cartCount", parseInt(productCount) + 1);
      document.getElementById("productCount").innerText = productCount;
      document.getElementById("count").innerText = productCount;
      window.location.reload();
    });
  }
});

colThreeByThree.addEventListener("click", () => {
  let card = "";
  data.map(
    (item) =>
      (card += `  
    <div class="cols col-sm-12 col-md-6 col-lg-4">
      <div class="card" >
      <div class="card-img-top">
         <img  src="${item.image}">
         <div class="icons">
         <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
         <div class="eye"> <i class="fa-regular fa-eye"></i></div>
         <div class="heart"> <i class="fa-regular fa-heart"></i></div>
         <div class="compare"> <i class="fa-solid fa-code-compare"></i></div>
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
    `)
  );
  row.innerHTML = card;

  const carts = document.querySelectorAll("#cart");
  for (const cart of carts) {
    cart.addEventListener("click", () => {
      localStorage.setItem("cartCount", parseInt(productCount) + 1);
      document.getElementById("productCount").innerText = productCount;
      document.getElementById("count").innerText = productCount;
      window.location.reload();
    });
  }
});



window.onload = function () {
  var min = document.getElementById("min");
  var max = document.getElementById("max");
  var minValue = document.getElementById("min-value");
  var maxValue = document.getElementById("max-value");

  min.innerHTML = minValue.value;
  max.innerHTML = maxValue.value;

  minValue.oninput = function () {
    min.innerHTML = this.value;
    filterData();
  };

  maxValue.oninput = function () {
    max.innerHTML = this.value;
    filterData();
  };

  function filterData() {
    var filteredData = data.filter(
      (value) => value.price >= minValue.value && value.price <= maxValue.value
    );
    const row = document.querySelector(".products .bottom .row");
let card = "";
filteredData.map(
  (item) =>
    (card += `  
    <div class="cols col-sm-12 col-md-6 col-lg-4">
      <div class="d-flex justify-content-center w-100">
      <div class="card" >
      <div class="card-img-top">
         <img  src="${item.image}">
         <div class="icons">
         <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
         <div class="eye"> <i class="fa-regular fa-eye"></i></div>
         <div class="heart"> <i class="fa-regular fa-heart"></i></div>
         <div class="compare"> <i class="fa-solid fa-code-compare"></i></div>
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
    </div>
    `)
);
row.innerHTML = card;

const carts = document.querySelectorAll("#cart");

for (const cart of carts) {
  cart.addEventListener("click", () => {
    localStorage.setItem("cartCount", parseInt(productCount) + 1);
    document.getElementById("productCount").innerText = productCount;
    document.getElementById("count").innerText = productCount;
    window.location.reload();
  });
}

const colOneByOne = document.querySelector(".products .top .boxes .col1");
const colThreeByThree = document.querySelector(".products .top .boxes .col3");

colOneByOne.addEventListener("click", () => {
  let card = "";
  filteredData.map(
    (item) =>
      (card += `  
      <div class="cols col-sm-12">
        <div class="cards">
        <div class="card-img-top">
           <img  src="${item.image}">
           <div class="icons">
           <div class="eye"> <i class="fa-regular fa-eye"></i></div>
           <div class="heart"> <i class="fa-regular fa-heart"></i></div>
           <div class="compare"> <i class="fa-solid fa-code-compare"></i></div>
           </div>
        </div>
           <div class="card-body d-flex flex-column justify-content-end">
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
             <div class="btn" id="cart">Add to cart</div>
           </div>
           
        </div>
      </div>
      `)
  );
  row.innerHTML = card;

  const carts = document.querySelectorAll("#cart");
  for (const cart of carts) {
    cart.addEventListener("click", () => {
      localStorage.setItem("cartCount", parseInt(productCount) + 1);
      document.getElementById("productCount").innerText = productCount;
      document.getElementById("count").innerText = productCount;
      window.location.reload();
    });
  }
});

colThreeByThree.addEventListener("click", () => {
  let card = "";
  filteredData.map(
    (item) =>
      (card += `  
    <div class="cols col-sm-12 col-md-6 col-lg-4">
      <div class="card" >
      <div class="card-img-top">
         <img  src="${item.image}">
         <div class="icons">
         <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
         <div class="eye"> <i class="fa-regular fa-eye"></i></div>
         <div class="heart"> <i class="fa-regular fa-heart"></i></div>
         <div class="compare"> <i class="fa-solid fa-code-compare"></i></div>
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
    `)
  );
  row.innerHTML = card;

  const carts = document.querySelectorAll("#cart");
  for (const cart of carts) {
    cart.addEventListener("click", () => {
      localStorage.setItem("cartCount", parseInt(productCount) + 1);
      document.getElementById("productCount").innerText = productCount;
      document.getElementById("count").innerText = productCount;
      window.location.reload();
    });
  }
});
  }
  
};




