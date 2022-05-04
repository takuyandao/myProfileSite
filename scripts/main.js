document.addEventListener('DOMContentLoaded', () => {
    new Main();
});

class Main {
    constructor() { 
        this._init();
    }

    _init() {
        new ScrollEvent();
        new MobileMenu();
        Pace.on('done', this._paceDone.bind(this));
    }

    _paceDone() {
        this._scrollInit();
    }
    
    _textAnimation(el) {
        const ta = new TextAnimation(el);
        ta.animate();
    }

    _inviewAnimation(el) {
        el.classList.toggle('inview');
    }

    _scrollInit() {
        new ScrollObserver('.title-up', this._textAnimation);
        new ScrollObserver('.title-down', this._textAnimation, { rootMargin: "0px 0px -50px 0px" });
        new ScrollObserver('.fa-cloud', this._inviewAnimation, { rootMargin: "0px 0px -100px 45px" });
        new ScrollObserver('.about__bar', this._inviewAnimation);
        new ScrollObserver('.portfolio__img', this._inviewAnimation, { rootMargin: "0px 0px -100px 3px" });
        new ScrollObserver('.portfolio__item', this._inviewAnimation, { rootMargin: "0px 0px -100px 2px" });
        new ScrollObserver('.footer__inner', this._inviewAnimation);
    }
}