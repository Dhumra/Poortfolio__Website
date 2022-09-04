// show menu

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      if(navToggle){
        navToggle.addEventListener('click' , () =>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click' , ()=>{
            navMenu.classList.remove('show-menu')
        })
      }


    //   remove menu mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on the nav-link we remove the show-menu class
     navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))



// skills tab

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

      function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i=0; i < skillsContent.length; i++){
          skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
          this.parentNode.className = 'skills__content skills__open'
        }
      }

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})

// services tab

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal')
    })
  })
})


// portfolio swiper

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
 
});

// scroll section active link ( makes sure that the section which is selected remains active)

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)


// change background header( add shadow to navbar after it passes 80px )

function scrollHeader(){   
  const nav = document.getElementById('header');

  if(this.scrollY >= 80) nav.classList.add('scroll-header'); 
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


//show scroll up

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else(scrollUp.classList.remove('show-scroll'));

}
window.addEventListener('scroll', scrollUp)

// dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// previously selected theme

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>document.body.classList.container(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.container(iconTheme) ? 'uil-moon' : 'uil-sun'


// we validate if user previously chose a topic

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
   // we save the theme and current icon
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})