// Imports
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const morgan = require("morgan");

// Express
const express = require("express");
const app = express();

// CORS
const cors = require("cors");
//_____________________________________________________________________________________________________

// Express Middlewares
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
app.use(express.json());

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

//_____________________________________________________________________________________________________

// Routers
const issueMailerRouter = require("./issueMailer/issueMailer.router");

app.use("/api/mailer/sendmail", issueMailerRouter);

app.use(notFound);
app.use(errorHandler);

// Exports
module.exports = app;
