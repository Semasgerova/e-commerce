var productCount = parseInt(localStorage.getItem('cartCount') || 0);

document.getElementById("productCount").innerText = productCount;
document.getElementById("count").innerText = productCount;

// Change Photo

const photos = document.querySelectorAll(".product .box .photos .photo");
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    let colorNameId = link.id;
    resetLink(colorNameId);
    addActive(colorNameId);
    setNewColor(colorNameId);
  });
});

function resetLink(id) {
    links.forEach(link=>{
        if(id!==link.id){
            link.classList.remove('active');
        }
        
    })
  
}
function addActive(id){
    links.forEach(link=>{
        if(id==link.id){
            link.classList.add('active');
        }
    })
}

function setNewColor(id) {
    photos.forEach(photo=>{
        if (photo.id !== id) {
            photo.classList.add("d-none");
          } else{
            photo.classList.remove("d-none");
          }
    })
  
}

// Count

const decrement = document.querySelector('.product .top .addCart .decrement');
const increment = document.querySelector('.product .top .addCart .increment');
const count = document.querySelector('.product .top .addCart .box .quantity span');

var currentValue = parseInt(count.getAttribute('data-count') || 0);
count.setAttribute('data-count', currentValue);
count.innerHTML = currentValue;

decrement.addEventListener('click', ()=>{
    var currentValue = parseInt(count.getAttribute('data-count') || 0);
if (currentValue > 0) {
    var cartCount = currentValue - 1;
    count.setAttribute('data-count', cartCount);
count.innerHTML = cartCount;
localStorage.setItem('currentValue', cartCount);
}
} )

increment.addEventListener('click', ()=>{
    var currentValue = parseInt(count.getAttribute('data-count') || 0);
let cartCount = currentValue + 1;
count.setAttribute('data-count', cartCount);
count.innerHTML = cartCount;
localStorage.setItem('currentValue', cartCount);
} )

productCount += parseInt(localStorage.getItem("currentValue") || 0);
   
// Add to cart
const add = document.querySelector('.product .top .addCart .add');
add.addEventListener('click', () => {
   localStorage.setItem('cartCount', parseInt(productCount));
   window.location.reload();
});
localStorage.setItem('currentValue', 0);
localStorage.setItem('cartCount', parseInt(productCount));
document.getElementById("productCount").innerText = productCount;
document.getElementById("count").innerText = productCount;
