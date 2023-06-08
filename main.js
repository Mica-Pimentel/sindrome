// abre e fecha o menu no icone//
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em cada item do menu, esconder-o//
const links = document.querySelectorAll('#header ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* mudar o header da pagina quando ser scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changerHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll maior que o header
    header.classList.add('scroll')
  } else {
    //menor que o header
    header.classList.remove('scroll')
  }
}
