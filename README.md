<h1 align="center">
  Ecommerce Mobile Web
</h1>

** This Project is live and deployed in here [Ecommerce Mobile Web](https://ecommerce-mobile-web.netlify.app/) **

This project is built using Gatsby Js (React Js Framework) for generating static site which is very fast and seo friendly. I built this using my Own Boilerplate called [Gatsby Complete Boilerplate](https://github.com/gadanihiman/gatsby-complete-boilerplate) for easily getting started with Gatsby Js Framework, if you are curious about the template, feel free to [check it out in here](https://github.com/gadanihiman/gatsby-complete-boilerplate) and happy for any contribution.

### What have been implemented in this project?

1. The project implements Redux Saga for the State Management
3. Implements Redux Persistor for persist the data inside Local Storage
2. Using React Hooks
3. Implements Hooks useState
4. Implements Hooks useEffect
5. Implements Seo with React Helmet
6. Implements SSR and Generate Static Files for the Production

### Simple Explanation for the Project

1. I just used reusable ProductList Component for display every product inside Homepage, Wishlist, Purchased and Search Page.
2. Just used reusable ProductCard Component for display the detail product inside ProductList component.
3. When User click Buy button and click the Wishlist button, the product will stored inside the Global State Management (For the simplicity i only using Home reducer for handle all the data since this is a small project) and the data will persisted inside the local storage.
4. Social login when clicked will go to the homepage cause since i have no app id for Google and Facebook Apps API.

### ROUTES

1. / (For the Homepage)
2. /login (For the Login Page)
3. /product?id=123 (For the Product detail page)
4. /purchased (For displaying the product that already Purchased)
5. /wishlist (For displaying the product that already Wishlisted)
6. /404 (For not found page)

## 🚀 Quick start

1.  **Start the Project.**

    For starting the project You should Clone this Repo then do the start script.

    ```shell
    # start the React project
    npm run start
    ```
    or if you are using Yarn

    ```shell
    # start the React project
    yarn start
    ```

2.  **You can see the project online.**

    I deploy this project with Netlify for free, You can check it out this link right here [Ecommerce Mobile Web](https://ecommerce-mobile-web.netlify.app/)
    Notes: if You find the blank screen, maybe You need to clear your browser storage since i used the local storage and maybe it causing conflict with your current data inside storage.

    ```shell
    # start the React project
    npm run start
    ```
    or if you are using Yarn

    ```shell
    # start the React project
    yarn start
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src ├── components
            ├── containers 
            ├── lib 
            ├── redux 
            ├── routes 
            ├── services 
    ├── .eslintrc
    ├── .eslintignore
    ├── .gitignore
    ├── .babelrc
    ├── .prettierrc
    ├── .prettierignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/src/components`**: This directory will contain all components that will be use in this project.

4.  **`/src/containers`**: This directory will contain all the pages that defined in **`/src/routes/index.js`**.

4.  **`/src/lib`**: This directory will contain all the helpers functions and constant like axios settings and etc.

5.  **`/src/redux`**: This directory will contain all the redux saga things.

6.  **`/src/routes`**: This directory will contain all the routes that can be used in this mobile app.

7.  **`/src/services`**: This directory will contain all the api services.

8.  **`.babelrc`**: This file contains the babel setting for this project.

9.  **`.eslintignore`**: This file tells eslint which files it should not track for eslint setting.

10.  **`.eslintrc`**: This file for eslint setting for this project.

11.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

12.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

13.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

14.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

15.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

16.  **`LICENSE`**: Gatsby is licensed under the MIT license.

17. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

18. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

19. **`README.md`**: A text file containing useful reference information about your project.

## 💫 This Site is Deployed at Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/556d774a-6519-43f3-97ac-e14ad7438258/deploy-status)](https://app.netlify.com/sites/ecommerce-mobile-web/deploys)
