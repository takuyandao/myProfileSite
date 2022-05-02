document.addEventListener('DOMContentLoaded', () => {

    new ScrollEvent();

    // hero title
    const fn = (el) => {
        const obj = new TextAnimation(el);
        obj.animate();
    }
    new ScrollObserver('.title-up', fn);

    // about h1, career h1 
    const fn2 = (el) => {
        const obj2 = new TextAnimation(el);
        obj2.animate();
    }

    new ScrollObserver('.title-down', fn2);

    // cloud icon
    const fn3 = (el) => {
        el.classList.toggle('inview');
    }
    new ScrollObserver('.fa-cloud', fn3, { rootMargin: "0px 0px -100px 45px" });
    
    // about bar
    const fn4 = (el) => {
        el.classList.add('inview');
    }
    new ScrollObserver('.about__bar', fn4);

});

const btn = document.querySelector('.mobile-menu__btn');
const container = document.querySelector('#global-container');
const cover = document.querySelector('.mobile-menu__cover');

btn.addEventListener('click', () => {
    container.classList.toggle('menu-open');
});
cover.addEventListener('click', () => {
    container.classList.toggle('menu-open');
})