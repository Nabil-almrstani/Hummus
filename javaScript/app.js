const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const down = document.querySelector(".down")


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('toggle')
  down.classList.toggle("hidden")
  for(i = 0 ; i < links.length; i++){
    links[i].classList.toggle("hidden")
  }
  
})




var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
  slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1124: {
      slidesPerView: 3,
  slidesPerGroup: 2,
      spaceBetween: 20,
    },
  }
});