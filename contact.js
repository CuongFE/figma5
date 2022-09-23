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