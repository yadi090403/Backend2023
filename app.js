// Import express
const express = require('express');

// make an object express
const app = express();

// using middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route definition
const router = require("./routes/api");
app.use(router);

// port definition
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});