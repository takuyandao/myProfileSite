class MobileMenu {

    constructor() {
        this.btn = document.querySelector('.mobile-menu__btn');
        this.container = document.querySelector('#global-container');
        this.cover = document.querySelector('.mobile-menu__cover');
        this.links = document.querySelectorAll('.mobile-menu__itemnk');
        this.logo = document.querySelector('.mobile-menu__logo');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        const isTouchCapable =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch) ||
          navigator.maxTouchPoints > 0 ||
          window.navigator.msMaxTouchPoints > 0;
    
        return isTouchCapable ? "touchstart" : "click";
    }

    _addEvent() {
        this.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.cover.addEventListener(this.eventType, this._toggle.bind(this));
        this.logo.addEventListener(this.eventType, this._remove.bind(this));
        this.links.forEach(link => {
            link.addEventListener(this.eventType, this._remove.bind(this));
        })
    }

    _toggle() {
        this.container.classList.toggle('menu-open');
    }

    _remove() {
        this.container.classList.remove('menu-open');
    }

}

