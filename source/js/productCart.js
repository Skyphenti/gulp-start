// import { addToStorage, getStorage, removeFromStorage } from "./localStorage";
// import {openModal, closeModal} from './modals.js'

// const modalCart = document.querySelector('');
// const modalCartError = document.querySelector('');
// const blockMenu = document.querySelector('');
// const cart = document.querySelector('');
// const cartList = document.querySelector('');
// const cartOpenButton = document.querySelector('');
// const cartCount = document.querySelector('');
// const cartProductTemplate = document.querySelector('');

// const removeProductFromCart = (productId) => {
// const node = cartList.querySelector(`[data-product-id="${productId}"]`);
// node.remove();
// cartCount.textContent = cartList.childElementCount;

// if(!cartList.childElementCount) {
//     cart.cartList.remove('');
// }
// removeFromStorage(productId, 'cart');
// };

// const addProductToCart = (product, isClick = false) => {
//     if(!product || (isClick && getSrorage('cart')?.map(el => Number(el.id))?.includes(product.id))) {
//         openModal(modalCartError)
//         return
//     }

//     const node = cartProductTemplate.querySelector('')

//     node.dataset.productId = product.id;
//     node.querySelector('').href = product.link;
//     node.querySelector('').src = product.image;
//     node.querySelector('').textContent = `${product.price} ₽`;

//     node.querySelector('').addEventListener('click', (event) => {
//         removeProductFromCart(product.id);
//         event.stopPropagation();
//     })

//     if(isClick) {
//         openModal(modalCart);
//     }

//         cartList.append(node);
//         addToStorage(product, 'cart');
//         cartCount.textContent= cartList.childElementCount;
// };

// const openCart = (event) => {
//     event.preventDefault();

//     if(!cartList.childElementCount) {
//         return
//     }

//     cart.classList.add('');
// }

// const closeCart = (event) => {
//     if(blockMenu.contains(event.target)) {
//         return
//     }

//     if(cart.classList.contains('')) {
//         event.preventDefault()
//     }

//     cart.classList.remove('');
// }

// cartOpenButton.addEventListener('click', openCart);

// document.addEventListener('click', closeCart);

// if(getStorage('cart')?.length) {
//     getStorage('cart').forEach(product => {
//         addProductToCart(product);
//     })
//     cartCount.textContent = cartList.childElementCount;
// }

// export {removeProductFromCart, addProductToCart};


