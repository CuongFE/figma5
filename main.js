let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
};



//NAVBAR
const $ = document.querySelector.bind(document);

const menuOpen = $('.nav__icon');
const menuClose = $('.close-icon');

menuOpen.addEventListener('click',function() {
  document.querySelector('.nav__list').style.transition = 'all 0.5s ease';
  document.querySelector('.nav__list').style.height = '300px';
  menuOpen.classList.add('disabled');
  menuClose.classList.add('active');
  document.querySelector('.overlay').style.display='block';
})

menuClose.addEventListener('click',function() {
  document.querySelector('.nav__list').style.height = '0';
  menuOpen.classList.remove('disabled');
  menuClose.classList.remove('active');
  document.querySelector('.overlay').style.display='none';

})
