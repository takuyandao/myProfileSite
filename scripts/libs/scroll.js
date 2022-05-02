class ScrollEvent {

    constructor() {
        this.hero__title = document.querySelector('.hero__title');
        this.header = document.querySelector('.header');
        this._onScroll();
    }

    _onScroll() {
        const fn = () => {
            let value = scrollY / 10;
            this.hero__title.style.marginTop = `${-value}%`;

            if (scrollY > 650) {
                this.header.classList.add('active');
            } else {
                this.header.classList.remove('active');
            };   
        }

        onscroll = fn;
    }

}

class ScrollObserver {
    constructor(els, cb, options) {

        this.els = document.querySelectorAll(els);
        this.cb = cb
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        }
        this.options = Object.assign(defaultOptions, options);

        this._init();
    }

    _init() {
        const callback = (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    this.cb(entry.target);
                    observer.unobserve(entry.target);
                }

            });
        }

        this.io = new IntersectionObserver(callback.bind(this), this.options);

        this.els.forEach(el => this.io.observe(el));
    }
}