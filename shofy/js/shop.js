import { shopData } from "../data/data.js";

var productCount = parseInt(localStorage.getItem("cartCount") || 0);

//notification
const notifications = document.querySelector(".notifications");
const createToast = () => {
  const toast = document.createElement("div");
  toast.className =
    "notification d-flex align-items-center justify-content-around";
  toast.innerHTML = `
<h6 class="m-0"><i class="fa-solid fa-circle-check"></i> 1 product added to cart</h6>
`;
  notifications.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 1000);
};

//Default Data
document.getElementById("productCount").innerText = productCount;
document.getElementById("count").innerText = productCount;
const row = document.querySelector(".products .bottom .row");
const productsPerPage = 9;
const totalPages = Math.ceil(shopData.length / productsPerPage);
let currentPage = 1;
let startIndex = (currentPage - 1) * productsPerPage;
let endIndex = currentPage * productsPerPage;
let cardd = "";

shopData.slice(startIndex, endIndex).map((item) => {
  cardd += `
<div class="cols col-sm-12 col-md-6 col-lg-4">
<div class="d-flex justify-content-center w-100">
<div class="card">
<div class="card-img-top">
<img src="${item.image}">
<div class="icons">
<div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
<div class="eye"><i class="fa-regular fa-eye"></i></div>
<div class="heart"><i class="fa-regular fa-heart"></i></div>
<div class="compare"><i class="fa-solid fa-code-compare"></i></div>
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
`;
});

row.innerHTML = cardd;

//Pagination
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

nextPageBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
});

function updatePage() {
  startIndex = (currentPage - 1) * productsPerPage;
  endIndex = currentPage * productsPerPage;

  let newCards = "";

  shopData.slice(startIndex, endIndex).map((item) => {
    newCards += `
  <div class="cols col-sm-12 col-md-6 col-lg-4">
  <div class="d-flex justify-content-center w-100">
  <div class="card">
  <div class="card-img-top">
  <img src="${item.image}">
  <div class="icons">
  <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
  <div class="eye"><i class="fa-regular fa-eye"></i></div>
  <div class="heart"><i class="fa-regular fa-heart"></i></div>
  <div class="compare"><i class="fa-solid fa-code-compare"></i></div>
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
  `;
  });

  cardd = newCards;
  row.innerHTML = cardd;
}
const carts = document.querySelectorAll("#cart");

for (const cart of carts) {
  cart.addEventListener("click", () => {
    localStorage.setItem("cartCount", parseInt(productCount) + 1);
    document.getElementById("productCount").innerText = productCount;
    document.getElementById("count").innerText = productCount;
    setTimeout(() => {
      window.location.reload();
    }, 2000);

    createToast();
  });
}

const colOneByOne = document.querySelector(".products .top .boxes .col1");
const colThreeByThree = document.querySelector(".products .top .boxes .col3");

//col 1-1
colOneByOne.addEventListener("click", () => {
  const productsPerPage = 9;
  const totalPages = Math.ceil(shopData.length / productsPerPage);
  let currentPage = 1;
  let startIndex = (currentPage - 1) * productsPerPage;
  let endIndex = currentPage * productsPerPage;
  let cardd = "";

  shopData.slice(startIndex, endIndex).map((item) => {
    cardd += `
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
`;
  });

  row.innerHTML = cardd;

  const prevPageBtn = document.getElementById("prevPageBtn");
  const nextPageBtn = document.getElementById("nextPageBtn");

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePage();
    }
  });

  function updatePage() {
    startIndex = (currentPage - 1) * productsPerPage;
    endIndex = currentPage * productsPerPage;

    let newCards = "";

    shopData.slice(startIndex, endIndex).map((item) => {
      newCards += `
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
  `;
    });

    cardd = newCards;
    row.innerHTML = cardd;
  }
  const carts = document.querySelectorAll("#cart");

  for (const cart of carts) {
    cart.addEventListener("click", () => {
      localStorage.setItem("cartCount", parseInt(productCount) + 1);
      document.getElementById("productCount").innerText = productCount;
      document.getElementById("count").innerText = productCount;
      setTimeout(() => {
        window.location.reload();
      }, 2000);

      createToast();
    });
  }
});
//col 3-3
colThreeByThree.addEventListener("click", () => {
  const productsPerPage = 9;
  const totalPages = Math.ceil(shopData.length / productsPerPage);
  let currentPage = 1;
  let startIndex = (currentPage - 1) * productsPerPage;
  let endIndex = currentPage * productsPerPage;
  let cardd = "";

  shopData.slice(startIndex, endIndex).map((item) => {
    cardd += `
<div class="cols col-sm-12 col-md-6 col-lg-4">
<div class="d-flex justify-content-center w-100">
<div class="card">
<div class="card-img-top">
<img src="${item.image}">
<div class="icons">
<div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
<div class="eye"><i class="fa-regular fa-eye"></i></div>
<div class="heart"><i class="fa-regular fa-heart"></i></div>
<div class="compare"><i class="fa-solid fa-code-compare"></i></div>
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
`;
  });

  row.innerHTML = cardd;

  const prevPageBtn = document.getElementById("prevPageBtn");
  const nextPageBtn = document.getElementById("nextPageBtn");

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePage();
    }
  });

  function updatePage() {
    startIndex = (currentPage - 1) * productsPerPage;
    endIndex = currentPage * productsPerPage;

    let newCards = "";

    shopData.slice(startIndex, endIndex).map((item) => {
      newCards += `
  <div class="cols col-sm-12 col-md-6 col-lg-4">
  <div class="d-flex justify-content-center w-100">
  <div class="card">
  <div class="card-img-top">
  <img src="${item.image}">
  <div class="icons">
  <div class="cart" id="cart"><i class="fa-solid fa-cart-shopping"></i></div>
  <div class="eye"><i class="fa-regular fa-eye"></i></div>
  <div class="heart"><i class="fa-regular fa-heart"></i></div>
  <div class="compare"><i class="fa-solid fa-code-compare"></i></div>
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
  `;
    });

    cardd = newCards;
    row.innerHTML = cardd;
  }
  const carts = document.querySelectorAll("#cart");

  for (const cart of carts) {
    cart.addEventListener("click", () => {
      localStorage.setItem("cartCount", parseInt(productCount) + 1);
      document.getElementById("productCount").innerText = productCount;
      document.getElementById("count").innerText = productCount;
      setTimeout(() => {
        window.location.reload();
      }, 2000);

      createToast();
    });
  }
});

window.onload = function () {
  //ionRangeSlider
  $(document).ready(function () {
    $("#rangeSlider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1199,
      from: 0,
      to: 1100,
      prefix: "$",
    });
  });
  $("#rangeSlider").on("change", function () {
    filterData();
  });
  function filterData() {
    var minCapacity = $("#rangeSlider").data().from;
    var maxCapacity = $("#rangeSlider").data().to;
    
    var filteredData = shopData.filter(
      (value) => value.capacity >= minCapacity && value.capacity <= maxCapacity
    );
    var filteredData = shopData.filter(
      (value) =>
        value.price >= $("#rangeSlider").data().from &&
        value.price <= $("#rangeSlider").data().to
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
        setTimeout(() => {
          window.location.reload();
        }, 2000);

        createToast();
      });
    }

    const colOneByOne = document.querySelector(".products .top .boxes .col1");
    const colThreeByThree = document.querySelector(
      ".products .top .boxes .col3"
    );

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
          setTimeout(() => {
            window.location.reload();
          }, 2000);

          createToast();
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
          setTimeout(() => {
            window.location.reload();
          }, 2000);

          createToast();
        });
      }
    });
  }

  //filter color
  var colors = document.querySelectorAll(".products .color li");
  var filtered = [];
  colors.forEach((color) => {
    color.addEventListener("click", () => {
      handleColorClick(color.id);
    });
  });

  function handleColorClick(color) {
    applyColorFilter(color);
    let card = "";
    filtered.map(
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
        setTimeout(() => {
          window.location.reload();
        }, 2000);

        createToast();
      });
    }
  }

  function applyColorFilter(color) {
    filtered = shopData.filter((value) => value.color === color);
  }

  //filter product category
  var categories = document.querySelectorAll(".products .categories li");
  categories.forEach((category) => {
    category.addEventListener("click", () => {
      handleCategoryClick(category.id);
    });
  });

  function handleCategoryClick(category) {
    applyCategoryFilter(category);
    let card = "";
    filtered.map(
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
        setTimeout(() => {
          window.location.reload();
        }, 2000);

        createToast();
      });
    }
  }

  function applyCategoryFilter(category) {
    filtered = shopData.filter((value) => value.category === category);
  }

  //sorting
  var selectElement = document.querySelector(".products .sort .form-control");
  selectElement.addEventListener("change", () => {
    var selectedValue = selectElement.value;

    switch (selectedValue) {
      case "low":
        const dataLow = shopData.sort((a, b) => a.price - b.price);
        let cardLow = "";
        dataLow.map(
          (item) =>
            (cardLow += `  
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
        row.innerHTML = cardLow;
        const carts = document.querySelectorAll("#cart");
        for (const cart of carts) {
          cart.addEventListener("click", () => {
            localStorage.setItem("cartCount", parseInt(productCount) + 1);
            document.getElementById("productCount").innerText = productCount;
            document.getElementById("count").innerText = productCount;
            setTimeout(() => {
              window.location.reload();
            }, 2000);

            createToast();
          });
        }
        break;
      case "high":
        const dataHigh = shopData.sort((a, b) => b.price - a.price);
        let cardHigh = "";
        dataHigh.map(
          (item) =>
            (cardHigh += `  
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
        row.innerHTML = cardHigh;
        const cartsHigh = document.querySelectorAll("#cart");
        for (const cart of cartsHigh) {
          cart.addEventListener("click", () => {
            localStorage.setItem("cartCount", parseInt(productCount) + 1);
            document.getElementById("productCount").innerText = productCount;
            document.getElementById("count").innerText = productCount;
            setTimeout(() => {
              window.location.reload();
            }, 2000);

            createToast();
          });
        }
        break;
      default:
        let card = "";
        shopData.map(
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
    }
  });
};

//reset filter
var reset = document.querySelector(".products .reset .btn");
reset.addEventListener("click", () => {
  window.location.reload();
});
