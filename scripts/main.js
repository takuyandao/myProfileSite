const btn = document.querySelector('.mobile-menu__btn');
const container = document.querySelector('#global-container');

btn.addEventListener('click', () => {
    container.classList.toggle('menu-open');
});