const btn = document.querySelector('.mobile-menu__btn');
const container = document.querySelector('#global-container');
const cover = document.querySelector('.mobile-menu__cover');

new TextAnimation('.animate-title');

btn.addEventListener('click', () => {
    container.classList.toggle('menu-open');
});
cover.addEventListener('click', () => {
    container.classList.toggle('menu-open');
})

const hero__title = document.querySelector('.hero__title');

const fn = () => {
    let value = scrollY / 10;
    hero__title.style.marginTop = -value + '%';

    if(scrollY > 700){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    };
}

onscroll = fn;