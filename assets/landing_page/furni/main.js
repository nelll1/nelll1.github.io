
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const burger = document.getElementById('burger')
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            burger.classList.toggle('is-active')
        });
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const burger = document.getElementById('burger')
    burger.classList.toggle('is-active')
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
