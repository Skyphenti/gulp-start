

export default (products, template, target, isTargetList = false, templateClass = '') => {

    const fragment = document.createDocumentFragment();

    let productEl = template.querySelector('.product-card');


    if (isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;

        Array.prototype.forEach.call(productEl.attributes, function ( attr ) {
            node.setAttribute( attr.name, attr.value );
        });

        node.classList.add(templateClass);

        productEl = node;
    }

    products.forEach(product => {
        const itemEl = productEl.cloneNode(true);
        const imageEl = itemEl.querySelector(".product-card__img");
        const titleEl = itemEl.querySelector(".product-card__title");
        const linkEl = itemEl.querySelector(".product-card__link");
        const priceEl = itemEl.querySelector(".product-card__price");
        const priceOldEl = itemEl.querySelector(".product-card__price--old");
        const button = itemEl.querySelector(".product-card__add-button");
        const { id, name, image, link, price, oldPrice, status, size } = product;

        // button.addEventListener(click, () => {
        //     addProductToCart(product, true);
        // });

        itemEl.dataset.productId = id;
        imageEl.src = image;
        titleEl.textContent = name;
        linkEl.href = link;
        priceEl.textContent = `${price} ₽`;
        priceOldEl.textContent = `${oldPrice} ₽`;

        if (status?.length) {
            itemEl.classList.add('product-card--`${status}`')
        }

        if(size?.length) {
            itemEl.classList.add('big-card-catalog')
        }

        fragment.appendChild(itemEl);
    });

    target.innerHTML = '';
    target.append(fragment);
}