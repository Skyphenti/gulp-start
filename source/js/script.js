'use strict'

import renderProduct from './renderProduct.js';
import { fetchParams }  from './fetch.js';
import './modals.js';

const catalogList = document.querySelector('.catalog__list')

const catalogItemTemplate = document.querySelector('#product').content;

const dataCurrency = fetchParams('https://zsa-studio.ru/catalog.php');
dataCurrency.then((products) => renderProduct(products, catalogItemTemplate, catalogList, true, "catalog__item" ));

