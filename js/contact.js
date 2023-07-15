var productCount = parseInt(localStorage.getItem("cartCount") || 0);

document.getElementById("productCount").innerText = productCount;
document.getElementById("count").innerText = productCount;
