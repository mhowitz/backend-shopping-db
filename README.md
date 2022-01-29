# backend-shopping-db

# E-Commerce DB with Express and Sequelize

![badge](https://img.shields.io/badge/MIT-License-Green)

Link to Repo: [GITHUB-REPO]https://github.com/mhowitz/employee-tracker

Link to Walkthrough Video: [VIDEO]https://youtu.be/DLflfRBWhwg

## Description

This Project was created using Node.js, Sequelize and Express to create a database for an e-commerce website. I uses models for categories, products, and tags to link them together in differnet tables and is deployed to the local server with express.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)


## Installation

Clone the GitHub repo to the user's computer. Run "npm i" in the terminal to install all of the necessary packages. Then connect to the database in mysql by typing "source db/schema.sql". Exit mysql and type "npm run seed" into the terminal to populate the database. Finally, the user can start the server using "npm start" or "node server". 

## Usage

If the user wishes to look at data in the database, they can use insomnia and change the endpoints to /api/categories, /api/products, or /api/tags. They can also display the data in the browser on http://localhost:3001/api/categories or which ever endpoint they would like to use. In insomnia, the user can create, update, or delete data from the database by changing the method and endpoint of the url. 

Here is a screenshot of what the category data looks like in insomnia:

![screenshot-of-browser]()


Here is a screenshot of what the product data looks like in the browser:

![screenshot-of-terminal]()

## License 

[MIT License Link]https://choosealicense.com/licenses/mit/

MIT License

Copyright (c) 2022 Mikayla Howitz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
Eric Sayer T.A.
Karina T.A.

## Questions

Click [here](https://github.com/mhowitz) to visit my GitHub profile

Email for questions: miikaylahowitz@gmail.com

