const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/index.js'),
  },
  {
    path: '/about-us',
    component: path.resolve('src/pages/page-2.js'),
  },
  {
    path: '/404',
    component: path.resolve('src/pages/404.js'),
  },
];
