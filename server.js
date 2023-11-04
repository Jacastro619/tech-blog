const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequalize")(session.Store);

const routes = require("./controllers");
const sequalize = require("./config/connection");

// Psuedocode

// create directories within the convention of MVC (Model-View-Control)
// - controllers, Views, Models folders
// - server.js
// Create Models
// Create index.js to create relationships of models
// - User, Posts, Comments (Users <-> Posts/Comments one to many relationships)
//   - User -> id, username, password
// - encrpty password, need some hooks
//   - Post -> id, title, description, fk_user_id
//   - Comments -> id, description, fk_post_id, fk_user_id

// Views
//  - handlebars
//  - login/sign-up, homepage, dashboard, post(comment-partial), new-post,
//  - folders for layouts and partials if you plane to use them
//     - layouts main? partials post/comment?

// Controllers
// - Routes! api and home
// - index -> apiroutes, homeroutes
// - /api/ index, user, (blog)post, comments
//  - get, post, put, delete
//  - index -> userrouts, postroutes, commentroutes
//  - (blog)post -> :id, title, description, user
//  - user -> :id, username, password
//  - comments -> :id, description [includes: data wanted to be includes]
// - homeroutes -> (get) '/', '/login', '/post/:id', '/user/:id'(for the dashboard)

// Basics
// - server files, .env, .gitignore, readme
// - public (css, img, js)
// - config(connection)
// - db(schema)
// - seeds(test data: index, postData, commentsData?)
// - utiles(auth, helpers)
