'use strict'

const menuOpenButton = document.querySelector('.nav-button__burger');
const menuClosedButton = document.querySelector('.nav-button__close');
const menuAside = document.querySelector('.main-nav__menu');
const addButton = document.querySelectorAll('.add-button')
const modalClosedButton = document.querySelector('.modal__close')
const modalAdd = document.querySelector('.modal__item-add')
const resumeShoppingButton = document.querySelector('.modal__button')
const subscribeButton = document.querySelector('.footer__subscribe-btn')
const modalSubscribe = document.querySelector('.modal__subscribe')
const navButtons = document.querySelector('.main-nav__nav-button')

export const openModal = (modal) => {
    modalClosedButton.addEventListener('click', () => closeModal(modal));
    modal.showModal();
};

export const closeModal = (modal) => {
    modal.close();
    modalClosedButton.removeEventListener('click', openModal)
};
const closeMenu = () => {
    menuAside.classList.remove('main-nav__menu--showed')
    menuOpenButton.classList.remove('nav-button__burger--disabled')
    menuClosedButton.classList.remove('nav-button__close--active')
    navButtons.classList.remove('main-nav__nav-button--fixed')
    menuClosedButton.removeEventListener('click', closeMenu);
}


//никак не пойму, если я уберу объявление постоянной const, то почему-то перестает приходить json-файл от fetch
const openMenu = () => {
    menuOpenButton.addEventListener('click', () => {
        menuAside.classList.add('main-nav__menu--showed')
        menuOpenButton.classList.add('nav-button__burger--disabled')
        menuClosedButton.classList.add('nav-button__close--active')
        menuClosedButton.addEventListener('click', closeMenu)
        navButtons.classList.add('main-nav__nav-button--fixed')
    })
}



addButton.forEach(
    (button) => {
        button.addEventListener('click', () => {
            openModal(modalAdd)
        })
    }
);


// modalClosedButton.addEventListener ('click', () => closeModal(modalAdd));

resumeShoppingButton.addEventListener('click', () => {
    closeModal(modalAdd);
});


// modalClosedButton.addEventListener ('click', () => {
//     modalSubscribe.close('modal__subscribe');
// });


subscribeButton.addEventListener('click', (event) => {
    openModal(modalSubscribe);
    event.preventDefault()
});