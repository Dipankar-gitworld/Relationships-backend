const express = require ("express");

const sectionController = require ("./controllers/section.controller");

const authorController = require ("./controllers/author.controller");

const bookController = require ("./controllers/book.controller");

const checkoutController = require ("./controllers/checkout.controller");

const app = express();

app.use(express.json());

app.use("/section", sectionController);

app.use("/author", authorController);

app.use("/book", bookController);

app.use("/checkout", checkoutController);

module.exports = app;