var hamburger  = document.querySelector('.hamburger')
var nav  = document.querySelector('nav')
var isOpen = false

hamburger.addEventListener('click', function() {
    isOpen = !isOpen

    if (isOpen == true) {
        nav.style.clipPath = 'inset(0px 0% 0px 0px)'
        hamburger.innerHTML = 'close'
    } else {
        nav.style.clipPath = 'inset(0px 100% 0px 0px)'
        hamburger.innerHTML = 'menu'
    }
})