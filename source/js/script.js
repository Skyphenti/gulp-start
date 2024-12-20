'use strict'

import './main.js';
import renderProduct from './renderProduct.js';
import products from './products.js'

const catalogList = document.querySelector('.catalog__list')

const catalogItemTemplate = document.querySelector('#product').content;

renderProduct(products, catalogItemTemplate, catalogList, true, "catalog__item" )
