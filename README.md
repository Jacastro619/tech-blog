# Tech-Blog ![Static Badge](https://img.shields.io/badge/license-MIT-blue)

## Technology Used

| Technology Used  |                                                    Resource URL                                                    |
| ---------------- | :----------------------------------------------------------------------------------------------------------------: |
| JavaScript       | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Handlebars       |      [https://handlebarsjs.com/guide/#what-is-handlebars](https://handlebarsjs.com/guide/#what-is-handlebars)      |
| CSS              |        [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)        |
| Node.js          |                              [https://nodejs.org/en/docs](https://nodejs.org/en/docs)                              |
| Express.js       |                                  [https://expressjs.com/](https://expressjs.com/)                                  |
| MySQL            |                              [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)                              |
| Sequelize        |                          [https://sequelize.org/docs/v6/](https://sequelize.org/docs/v6/)                          |
| Express Sessions |           [https://www.npmjs.com/package/express-session](https://www.npmjs.com/package/express-session)           |
| Insomnia         |         [https://docs.insomnia.rest/insomnia/get-started](https://docs.insomnia.rest/insomnia/get-started)         |
| Git              |                                    [https://git-scm.com/](https://git-scm.com/)                                    |

## Description

[Visit the deployed site!](#)

This is a tech blog, a space where tech enthusiasts can delve into the world of technology. This app is equipped to allow user logins and sign-ups. Users can share their tech experiences through posts and engage in meaningful conversations. Whether the user is contributing their tech stories or commenting on others' posts, this is designed to facilitate discussions. Users also have control over their content, allowing them to update or remove their posts. In essence, this blog serves as the user's go-to destination to explore, connect, and engage.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Author Info](#author-info)

## Installation

If the user wishes to install the application locally on their machine, they should follow these instructions:

Assuming the user has Node.js and MySQL properly installed, the first step is to create a .env file with database credentials as environmental variables. Ensure that the variables (process.env) match what is placed in the createConnection block in /config/connection.js. **Important: If the user's code will be pushed into a public repository, please make sure that the .env file is included in the .gitignore file properly to prevent credentials from being pushed.**

Once the configuration is complete, the user should run 'npm i' to install the necessary dependencies. After the dependencies are installed, the user can start the server by running 'npm start'. The server will start, and the user can access the app through the locally configured port.

Optionally, the user can seed test data to see mock posts, users, and comments. To do this, the user will need to run 'npm seed', and the test data will be populated into the database.

## Usage

This app is fairly simple and straightforward to use. To get started, just sign up with a username and password. Once you sign up or log in, you'll be automatically redirected to the home page. The home page displays all public posts from all users, including your own posts. To view or leave comments on a post, click on the post's title, and you'll be taken to the post's dedicated page, where comments are displayed if available. You can also leave a comment on the post.

To view only the posts you've created, click on 'dashboard.' This will take you to your dashboard, where all your posts are listed. To edit or update, click on one of your posts on the dashboard. You'll then be directed to the edit/delete page, where you can modify the contents of your post or, if you prefer, delete it.

When you're ready to log out, simply click 'logout,' and you'll be redirected to the login/sign-up page.

## License

This project is covered under the MIT License. For more information about license go to [https://mit-license.org/](https://mit-license.org/)

## Questions

If there are additional questions, you may contact me at jorgecastro619@gmail.com or visit my [GitHub](https://github.com/Jacastro619)

## Author Info

Created by Jorge Castro, a student at UC Berkeley Full Stack Coding Academy. For more information go to https://bootcamp.berkeley.edu/coding/

- [Portfolio](https://jacastro619.github.io/my-portfolio/)

- [LinkedIn](https://www.linkedin.com/in/jorge-castro-2a9545177/)

- [GitHub](https://www.linkedin.com/in/jorge-castro-2a9545177/)
