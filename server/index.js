const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const cart = require("./routes/api/cart");

app.use("/api/cart", cart);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
