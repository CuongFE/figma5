const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listQuestion = $$('.list-questions__item');
const questionMore = $$('.list-questions__title span');
const solve = $$('.solve');

// active menu 

const menuItem = $$('.fqa-menu__item');
const menuLink = $$('.fqa-menu__link');


const heightSolveEle = solve[2].clientHeight;
console.log(heightSolveEle)


listQuestion.forEach(function(ele, index)
{   solve[index].style.height = '0';
    document.querySelector('.solve.active').style.height = `${heightSolveEle}px`;

    ele.addEventListener('click', function(e){
        if(questionMore[index].innerText === '+'){
            questionMore[index].innerHTML = '-';
            solve[index].style.height = `${heightSolveEle}px`;

        }
        else {
            questionMore[index].innerHTML = '+';
            solve[index].style.height = '0';

        }
        solve[index].style.transition = 'all 0.5s ease';
    })
})


// menu

const question = $$('.question')

menuItem.forEach(function(ele, index){
    ele.addEventListener('click', function(e){
        document.querySelector('.active.fqa-menu__item').classList.remove('active');
        document.querySelector('.fqa-menu__link--active.fqa-menu__link').classList.remove('fqa-menu__link--active');

        ele.classList.add('active');
        menuLink[index].classList.add('fqa-menu__link--active');

        document.querySelector('.question.active').classList.remove('active');
        question[index].classList.add('active');
    })
})



//NAVBAR

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