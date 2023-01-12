const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-menu");
const nav = document.querySelector('nav');
const divider = document.querySelector('.divider');
const more = document.querySelector('.more');
const scroller = document.querySelector('.scroll');


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-open');  
})

more.addEventListener('click', ()=>{
    if(more.innerHTML == "More")
    more.innerHTML = "Less";
    else more.innerHTML = "More";
    scroller.classList.toggle('scrolled');
})

window.onscroll = ()=>{
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200)
    nav.classList.add('under');
    else nav.classList.remove('under');
}
