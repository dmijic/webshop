const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const cart = require("./routes/api/cart");
const discounts = require("./routes/api/discounts");
const items = require("./routes/api/items");

app.use("/api/cart", cart);
app.use("/api/discounts", discounts);
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
