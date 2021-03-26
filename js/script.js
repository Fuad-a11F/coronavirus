let nav = document.querySelector('.list__body');
let menu_item = document.querySelector('.menu_items');
let burger_btn = document.querySelector('.burger');
let anchors = document.querySelectorAll('a[href*="#"]')
let topAnchor  = document.querySelector('.anchor');

if  (window.pageYOffset >= 1000) {
    topAnchor.style.display = 'block'
}

window.addEventListener('scroll', (e) => {
    console.log(window.pageYOffset);
    if  (window.pageYOffset >= 1000) {
        topAnchor.style.display = 'block'
    }
    else {
        topAnchor.style.display = 'none'
    }
});

nav.addEventListener('mouseover', e => {
    if (e.target.classList.contains('list__link') && !e.target.classList.contains('not_active')) {
        e.target.classList.add('active')
    }

});

nav.addEventListener('mouseout', e => {
    if (e.target.classList.contains('list__link') && !e.target.classList.contains('not_active')) {
        e.target.classList.remove('active')
    }

});

burger_btn.addEventListener('click', () => {
   menu_item.classList.toggle('active_menu')
});

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        menu_item.classList.remove('active_menu');
        let blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}