document.addEventListener('DOMContentLoaded', () => {

    new ScrollEvent();

    new MobileMenu();

    // hero title
    const fn = (el) => {
        const obj = new TextAnimation(el);
        obj.animate();
    }
    new ScrollObserver('.title-up', fn);

    // about h1, career h1, portfolio h1
    const fn2 = (el) => {
        const obj2 = new TextAnimation(el);
        obj2.animate();
    }

    new ScrollObserver('.title-down', fn2, { rootMargin: "0px 0px -50px 0px" });

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

    // portfolio__img
    const fn5 = (el) => {
        el.classList.add('inview');
    }
    new ScrollObserver('.portfolio__img', fn5, { rootMargin: "0px 0px -100px 3px" });

    // portfolio__item
    const fn6 = (el) => {
        el.classList.add('inview');
    }
    new ScrollObserver('.portfolio__item', fn6, { rootMargin: "0px 0px -100px 2px" });

});