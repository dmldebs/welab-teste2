function menushow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList == 'mobile-menu open') {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close.png";
    }
}
