
let hamburger = document.getElementById('hamburger')
let closeBtn = document.getElementById('close-nav')
let mobileNav = document.getElementById('mobile-nav')
let navWrapper = document.getElementById('nav-wrapper')

let cartBtn = document.getElementById('cart-icon') 
let cart = document.getElementById('mobile-cart') 
let closeCart = document.getElementById('close-cart')

hamburger.addEventListener('click', (e) => {
  mobileNav.classList.toggle("active-nav");
  navWrapper.classList.toggle("active-nav");
})

closeBtn.addEventListener('click', (e) => {
  mobileNav.classList.toggle("active-nav");
  navWrapper.classList.toggle("active-nav");
})

cartBtn.addEventListener('click', (e) => {
  cart.classList.toggle("active-cart");
  navWrapper.classList.toggle("active-nav");
})

closeCart.addEventListener('click', (e) => {
  cart.classList.toggle("active-cart");
  navWrapper.classList.toggle("active-nav");
})

navWrapper.addEventListener('click', (e) => {
  if (e.currentTarget == e.target)
  {
    cart.classList.remove("active-cart");
    mobileNav.classList.remove("active-nav");
    navWrapper.classList.remove("active-nav");
  }
})

function scrollToShop() {
  cart.classList.remove("active-cart");
  mobileNav.classList.remove("active-nav");
  navWrapper.classList.remove("active-nav");

  window.location.href = "index.html#shop";
  const shop = document.getElementById('shop');
  window.innerWidth > 640 ? offset = 156 : offset = 80;

  window.scrollTo({
    top: shop.getBoundingClientRect().top + window.scrollY - offset,
    left: 0,
    behavior: "smooth",
  });
}