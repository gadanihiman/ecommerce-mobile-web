const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/containers/index.js'),
  },
  {
    path: '/login',
    component: path.resolve('src/containers/login.js'),
  },
  {
    path: '/purchased',
    component: path.resolve('src/containers/purchased.js'),
  },
  {
    path: '/wishlist',
    component: path.resolve('src/containers/wishlist.js'),
  },
  {
    path: '/product',
    component: path.resolve('src/containers/product.js'),
  },
  {
    path: '/404',
    component: path.resolve('src/containers/404.js'),
  },
];
