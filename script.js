//mobile menu
const menu = document.getElementById("menu-panel");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("close-menu");

function handleMenu() {
  menu.classList.toggle("open");
  overlay.classList.toggle("visible");
}

openBtn.onclick = handleMenu;
openBtn.onfocus = handleMenu;
closeBtn.onclick = handleMenu;
overlay.onclick = handleMenu;

//image gallery
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const showImg = document.getElementById("prod-img");
let imgCounter = 0;
const imgs = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
previous.addEventListener("click", () => {
  imgCounter > 0 ? (imgCounter -= 1) : (imgCounter = 3);
  showImg.src = imgs[imgCounter];
});
next.addEventListener("click", () => {
  imgCounter < 3 ? (imgCounter += 1) : (imgCounter = 0);
  showImg.src = imgs[imgCounter];
});

//thumbnails
const thumbnails = [...document.querySelectorAll(".thumbnails-imgs")];
const borders = document.querySelectorAll(".thumbnails-wrapper");

thumbnails.forEach((el) => {
    
  el.addEventListener("click", () => {
    // reset thumbnails
    borders.forEach((x) => x.classList.remove("selected"));
    thumbnails.forEach((y) => y.classList.remove("mouse"));
    // select thumbnail
    el.parentElement.classList.add("selected");
    el.classList.add("mouse");
    //thumbnail as big image
    showImg.src = imgs[thumbnails.indexOf(el)];
  });

  el.addEventListener("mouseenter", () => {
    el.classList.add("mouse");
  });

  el.addEventListener("mouseleave", () => {
  if (!el.parentElement.classList.contains("selected")) {
    el.classList.remove("mouse");
  }
});

});


//add or sub items to cart
const add = document.getElementById("plus");
const sub = document.getElementById("minus");
let itemNum = document.getElementById("num");

add.addEventListener("click", () => {
  value = Number(itemNum.textContent);
  value += 1;
  itemNum.textContent = value;
});
sub.addEventListener("click", () => {
  let value = Number(itemNum.textContent);
  if (value > 0) {
    value -= 1;
  }
  itemNum.textContent = value;
});

//add to card button behaviour
const addCart = document.getElementById("add-cart");
const smallNum = document.getElementById("little-cart-num");

addCart.addEventListener("click", () => {
  let myItems = Number(itemNum.textContent);
  if (myItems > 0) {
    smallNum.classList.remove("hidden");
    smallNum.textContent = myItems + Number(smallNum.textContent);
  }
  cartCard.classList.add("hidden");
});

//cart button, show or hide cart content
const cartBtn = document.getElementById("cart");
const cartCard = document.getElementById("cart-card");
const cartImg = cartBtn.querySelector("#cart-icon path");
const empty = document.getElementById("empty-cart");
const full = document.getElementById("full-cart");
const cartItems = document.getElementById("how-many");
const totPrice = document.getElementById("total-price");
let canDelete = false;

cartBtn.addEventListener("click", () => {
  cartCard.classList.toggle("hidden");
  let countItems = Number(smallNum.textContent);

  cartItems.textContent = countItems;
  totPrice.textContent = `$${countItems * 125}.00`;
  //show or hide empty or full cart
  if (countItems > 0) {
    empty.style.display = "none";
    full.style.display = "block";
    canDelete = true;
  } else {
    empty.style.display = "flex";
    full.style.display = "none";
    canDelete = false;
  }
  //show cart icon black or gray
  if (cartCard.classList.contains("hidden")) {
    cartImg.setAttribute("fill", "#69707D");
  } else {
    cartImg.setAttribute("fill", "hsl(220, 13%, 13%)");
  }
});

//delete button
if ((canDelete = true)) {
  let deleteBtn = document.getElementById("delete-btn");
  deleteBtn.addEventListener("click", () => {
    empty.style.display = "flex";
    full.style.display = "none";
    smallNum.textContent = "0";
    smallNum.classList.add("hidden");
  });
}
