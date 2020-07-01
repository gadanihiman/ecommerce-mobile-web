const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/containers/index.js'),
  },
  {
    path: '/about-us',
    component: path.resolve('src/containers/page-2.js'),
  },
  {
    path: '/404',
    component: path.resolve('src/containers/404.js'),
  },
];
