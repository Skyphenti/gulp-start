'use strict'



const buttonMenuOpened = document.querySelector('.nav-button__burger');
const buttonMenuClosed = document.querySelector('.nav-button__close');
const menuAside = document.querySelector('.main-nav__menu');
const navButtons = document.querySelector('.main-nav__nav-button')
const addButton = document.querySelectorAll('.add-button')
const buttonClosedModal = document.querySelector('.modal__close')
const modalAddOpen = document.querySelector('.modal__item-add')
const buttonResumeShopping = document.querySelector('.modal__button')
const subscribeButton = document.querySelector('.footer__subscribe-btn')
const modalSubscribe = document.querySelector('.modal__subscribe')

const closeMenu = () => {
    menuAside.classList.remove('main-nav__menu--showed')
    buttonMenuOpened.classList.remove('nav-button__burger--disabled')
    buttonMenuClosed.classList.remove('nav-button__close--active')
    navButtons.classList.remove('main-nav__nav-button--fixed')
}

buttonMenuOpened.addEventListener('click', () => {
    menuAside.classList.add('main-nav__menu--showed')
    buttonMenuOpened.classList.add('nav-button__burger--disabled')
    buttonMenuClosed.classList.add('nav-button__close--active')
    buttonMenuClosed.addEventListener('click', closeMenu)
    navButtons.classList.add('main-nav__nav-button--fixed')
})

buttonMenuClosed.removeEventListener('click', closeMenu);


addButton.forEach(
    (button) => {
        button.addEventListener('click', () => {
            modalAddOpen.showModal('modal__item-add')
        })
    }
);



buttonClosedModal.addEventListener ('click', () => {
    modalAddOpen.close('modal__item-add');
}
);

buttonResumeShopping.addEventListener ('click', () => {
    modalAddOpen.close('modal__item-add');
});


subscribeButton.addEventListener('click', (event) => {
    modalSubscribe.showModal('modal__subscribe')
    event.defaultPrevented
});

buttonClosedModal.addEventListener ('click', () => {
    modalSubscribe.close('modal__subscribe');
});

