let slides = document.getElementsByClassName('slide')
let arrows = document.getElementsByClassName('arrow')
let dots = document.getElementsByClassName('dot')

let currentSlide = 0;

loopSlides(0);
function loopSlides(offset) {
  // remove current slide
  slides[currentSlide].classList.remove("shown");

  // get next slide number
  currentSlide = Math.abs((slides.length + (currentSlide + offset)) % slides.length);

  // show next slide
  slides[currentSlide].classList.add("shown");
  updateIndicator(currentSlide)
};

let interval = setInterval(loopSlides, 5000, 1);

[...arrows].forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id == "left")
      loopSlides(-1);
    if (e.target.id == "right")
      loopSlides(1);
    clearInterval(interval);
  });
});

function updateIndicator(slide) {
    for (let i = 0; i < dots.length; i++)
      dots[i].classList.remove('active')

    dots[slide].classList.add('active');

    if (currentSlide != slide)
      loopSlides(currentSlide + (currentSlide + slide) % slides.length);
}


[...dots].forEach((dot) => {
  dot.addEventListener('click', (e) => {
    updateIndicator(Number(e.target.id));
  })
})