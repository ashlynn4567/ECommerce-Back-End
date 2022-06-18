# E-Commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table-of-Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Future Development](#future-development)
- [Credits](#credits)

## Description

This is my thirteenth challenge assignment for the University of Oregon Coding Bootcamp 2022. In this challenge, I use Sequelize, Express.js, and MySQL to build data structures from the server-side api to the database.

This application was refactored from a working application that used Express.js to using Sequelize to interact with a MySQL database instead. Working on this application gave me an understanding of how e-commerce platforms work to provide a suite of services using a relational database like SQL.

## Features

This application is run using the user's terminal. Before running this application, please see the [Installation](#installation) section.

This application can be invoked using the command `npm start`, which starts the server. If users wish to test the back-end routes without a front-end user interface available, they can use [Insomnia](https://insomnia.rest/), a free application that allows you to test and validate results of RESTful applications. Once the server is started, users can test the following routes:

1. Using a GET request to the api endpoint `localhost:3001/api/[model_name]` will return all instances of that model. Currently, there are three different models you can test:
   - `/api/categories` will return all categories.
   - `/api/products` will return all products.
   - `/api/tags` will return all product tags.

<p align="center">
<img alt="A demonstration gif that shows the user navigating to 'localhost:3001/api/[model_name]' and using a get request to view all categories, products, and product tags." src="./assets/images/ecommerce-backend-demo.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/19lLoBaJpxMrgWwUKjjMfoFi9moeY-ncu/view" target="_blank">link</a> to the video version of the above gif.
</p>

2. Using a GET request to the api endpoint `localhost:3001/api/[model_name]/[id]` will return the category, product, or tag with the specified id. Currently, there are three different models you can test:
   - `/api/categories/[id]` will return a single item with the specified id from categories.
   - `/api/products/[id]` will return a single item with the specified id from products.
   - `/api/tags/[id]` will return a single item with the specified id from product tags.

<p align="center">
<img alt="A demonstration gif that shows the user navigating to 'localhost:3001/api/[model_name]/[id]' and using a get request to view a single category, product, and product tag." src="./assets/images/ecommerce-backend-demo-2.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1TaO2wT7NRhTh6nVHuB9CxYZfK7K9oawq/view" target="_blank">link</a> to the video version of the above gif.
</p>

3. Navigate to the api endpoint `localhost:3001/api/[model_name]`. Using a POST request from here will allow you to create a new category, product, or tag, as long as you input all of the necessary fields of information.
   - `/api/categories` requires that your data looks like this, where `[category_name]` is the name of the category you intend to add
     ```
     {
     "category_name": "[category_name]"
     }
     ```
   - `/api/products` requires that your data looks like this, where:
     - `[product_name]` is the name of the product you intend to add
     - `[integer]` is price you wish to list the item under or the number of these items you have in stock as an integer
     - `[category_id]` is the id number of the category to which you are adding this product as an integer
     ```
     {
     "product_name": "[product_name]",
     "price": [integer],
     "stock": [integer],
     "category_id": [category_id]
     }
     ```
   - `/api/tags` requires that your data looks like this, where `[tag_name]` is the name of the tag you intend to add
     ```
     {
     "tag_name": "[tag_name]"
     }
     ```

<p align="center">
<img alt="A demonstration gif that shows the user navigating to 'localhost:3001/api/[model_name]' and using a PUT request to add a category, product, and product tag." src="./assets/images/ecommerce-backend-demo-3.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1FeP2fUv_r7HJiEhKJYm_tubTJDxuOPZw/view" target="_blank">link</a> to the video version of the above gif.
</p>

4. Navigate to the api endpoint `localhost:3001/api/[model_name]/[id]`. Using a PUT request from here will allow you to edit the category, product, or tag of the id number you specified. See above as a reference to the fields you can change using this request.

<p align="center">
<img alt="A demonstration gif that shows the user navigating to 'localhost:3001/api/[model_name]/[id]' and using a POST request to edit a category, product, and product tag." src="./assets/images/ecommerce-backend-demo-4.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1zui2RUK77eSZYgjtSrQ7TUrstkkrokZW/view" target="_blank">link</a> to the video version of the above gif.
</p>

5. Navigate to the api endpoint `localhost:3001/api/[model_name]/[id]`. Using a DELETE request from here will allow you to delete the category, product, or tag of the id number you specified.

<p align="center">
<img alt="A demonstration gif that shows the user navigating to 'localhost:3001/api/[model_name]/[id]' and using a DELETE request to delete a category, product, and product tag." src="./assets/images/ecommerce-backend-demo-5.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/1W05LPfdoADYInDLsS2XQN4sE7rciB6Ko/view" target="_blank">link</a> to the video version of the above gif.
</p>

## Installation

In order to use this application, you will need to install it on your local computer.

1. Open the command line interface.
2. Clone the repository onto your local machine using the `git clone` command.
3. Once the repository has been cloned, navigate into the root directory of the application using the command `cd ECommerce-Back-End`.
4. This application has dependencies that must be installed prior to running the application (i.e. dotenv, inquirer, MySQL2, and console.table). Run the command `npm install` to install necessary packages and dependencies.
5. This application relies on private enviromental variables. In the main directory of the application, create a `.env` file.
   - The contents of your `.env` file should look like this, where [MySQL username] is your MySQL username, and [MySQL password] is your MySQL password:
   ```
   DB_NAME="ecommerce_db"
   DB_USER="[MySQL username]"
   DB_PW="[MySQL password]"
   ```
   - For example, if my username is `ashlynn4567` and my password is `password1234`, my `.env` file will look like the following:
   ```
   DB_NAME="ecommerce_db"
   DB_USER="ashlynn4567"
   DB_PW="password1234"
   ```
6. Next, you will need to seed the data. Note: You must have MySQL installed on your computer in order to seed the data.
   - Log in to MySQL in your command line with the command `mysql -u root -p`.
   - Enter your login credentials.
   - Type the command `source db/schema.sql`.
   - Quit MySQL with the command `quit`.
7. After quitting from MySQL, seed the database by running the command `npm run seed` in your terminal.
8. Now you can start the application. Enter the command `npm start` in your terminal to begin.
9. If you wish to stop the server at any time, simply type `ctrl + C` in your terminal.

For further help with installation, please refer to the below demonstration video.

<p align="center">
<img alt="A demonstration gif showing how to clone the repository to your local machine, install all necessary dependencies, create a .env file, and seed your database." src="./assets/images/ecommerce-backend-demo-6.gif"/>
<br>Here's a <a href="https://drive.google.com/file/d/19S5PcUH87zfvVx11-8hIoBlSGw7HTY6z/view" target="_blank">link</a> to the video version of the above gif.
</p>

## Technologies

- JavaScript
- Node.js
- npm
- [dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize.js](https://sequelize.org/)
- [Express.js](https://expressjs.com/)

## Future Development

In the future, I would like to add the following improvements:

- Although this project was created with a focus on back-end, I would love to connect it to a working front-end to make it a full stack application.

I'm always interested in refactoring code to improve it's functionality. If you would like to suggest your own improvements, you can reach our development team at the links below.

- <a href="mailto:ashlynn4567@gmail.com">Email</a>
- <a href="https://github.com/ashlynn4567">GitHub</a>
- <a href="www.linkedin.com/in/Ashley-Lynn-Smith">LinkedIn</a>

## Credits

This project was built with the help of the University of Oregon's Coding Boot Camp.

## Licensing

The application is covered under the following license: [MIT](https://opensource.org/licenses/MIT)
