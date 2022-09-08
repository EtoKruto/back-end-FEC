const express = require("express");
const serverless = require("serverless-http");
// const path = require('path');
const compression = require("compression");
// require('dotenv').config();

const app = express();
const router = express.Router();
// const port = 3000;

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test!",
  });
});

// Logging and parsing
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
// const router = require('./routes.js');

// Set up our routes
app.use(router);

// Serve the client files
// app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use("/.netlify/functions/api", router);

// Set up what we are listening on
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports = app;
module.exports.handler = serverless(app);
