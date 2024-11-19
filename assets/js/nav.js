
let hamburger = document.getElementById('hamburger')
let closeBtn = document.getElementById('close-nav')
let mobileNav = document.getElementById('mobile-nav')
let navWrapper = document.getElementById('nav-wrapper')

hamburger.addEventListener('click', (e) => {
  mobileNav.classList.toggle("active-nav");
  navWrapper.classList.toggle("active-nav");
})

closeBtn.addEventListener('click', (e) => {
  mobileNav.classList.toggle("active-nav");
  navWrapper.classList.toggle("active-nav");
})