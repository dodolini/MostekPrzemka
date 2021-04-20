const navbar = document.querySelector('nav');
const logo = document.querySelector('.logo');


const braBtn = document.querySelector('.bra');
const keepers = document.querySelector('.keepers');

const obrBtn = document.querySelector('.obr');
const defenders = document.querySelector('.defenders');

const pomBtn = document.querySelector('.pom');
const midfielders = document.querySelector('.midfielders');

const napBtn = document.querySelector('.nap');
const strikers = document.querySelector('.strikers');

const team = document.querySelector('#team');
const h1After = document.querySelector('.after');
const teamStart = team.offsetTop;


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
  };
  
  //pobieramy nasze elementy
  const prepareDOMElements = () => {
    
   
  };
  
  //nadajemy nasłuchiwania
  const prepareDOMEvents = () => {
    // document.addEventListener('scroll', changeNav) 

  };

  window.addEventListener("scroll", function () {
      const scrollValue = window.pageYOffset;
      const navHeight = navbar.getBoundingClientRect().height;
      

      if((scrollValue + 500) > teamStart) {
          h1After.classList.add('typing');
      }
      else {
        h1After.classList.remove('typing');
      }

      if(scrollValue > navHeight) {
          navbar.classList.add('nav-active');
          logo.classList.add('logo-active');
      }
      else {
          navbar.classList.remove('nav-active');
          logo.classList.remove('logo-active');
      }
  });

  braBtn.addEventListener("click", function () {
      obrBtn.classList.remove('role-active');
      pomBtn.classList.remove('role-active');
      napBtn.classList.remove('role-active');

      braBtn.classList.add('role-active');

      keepers.style.display = "flex";
      defenders.style.display = "none";
      midfielders.style.display = "none";
      strikers.style.display = "none";
  })

  obrBtn.addEventListener("click", function () {
    braBtn.classList.remove('role-active');
    pomBtn.classList.remove('role-active');
    napBtn.classList.remove('role-active');

    obrBtn.classList.add('role-active');

    keepers.style.display = "none";
    defenders.style.display = "flex";
    midfielders.style.display = "none";
    strikers.style.display = "none";
})

  pomBtn.addEventListener("click", function () {
    braBtn.classList.remove('role-active');
    obrBtn.classList.remove('role-active');
    napBtn.classList.remove('role-active');

    pomBtn.classList.add('role-active');

    keepers.style.display = "none";
    defenders.style.display = "none";
    midfielders.style.display = "flex";
    strikers.style.display = "none";
})

  napBtn.addEventListener("click", function () {
    braBtn.classList.remove('role-active');
    obrBtn.classList.remove('role-active');
    pomBtn.classList.remove('role-active');

    napBtn.classList.add('role-active');

    keepers.style.display = "none";
    defenders.style.display = "none";
    midfielders.style.display = "none";
    strikers.style.display = "flex";
})

//SELECT ELEMENT FUNCTION
const selectElement = function (element) {
    return document.querySelector(element);
}

const menuToggler = selectElement('.burger');
const body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
})

  document.addEventListener('DOMContentLoaded', main);