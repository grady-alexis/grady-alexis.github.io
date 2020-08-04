// CONST
const app = document.querySelector('#app')
const menu = document.querySelector('.menu')
const burgerMenu = document.querySelector('.menu-item')

// LET
let showMenu = false;

burgerMenu.onclick = function () {
  burgerMenu.classList.toggle('active')
  showMenu = !showMenu

  if (showMenu) {
    menuAppear()
  } else {
    menuHiding()
  }
}

app.onclick = function () {
  if (showMenu) {
    showMenu = false
    burgerMenu.classList.toggle('active')
    menuHiding()
  }
}

function menuAppear() {
  app.style.opacity = '0.2'
  menu.style.left = '0px'
}

function menuHiding() {
  menu.style.left = '-600px'
  app.style.opacity = '1'
}
