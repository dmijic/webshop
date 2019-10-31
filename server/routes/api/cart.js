const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get cart
router.get("/", async (req, res) => {
  const cart = await loadCartCollection();
  res.send(await cart.find({}).toArray());
});

// Add to cart
router.post("/", async (req, res) => {
  const cart = await loadCartCollection();
  await cart.insertOne({
    itemId: req.body.itemId
  });
  res.status(201).send();
});

// Delete from cart
router.delete("/:id", async (req, res) => {
  const cart = await loadCartCollection();
  await cart.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send();
});

async function loadCartCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://dmijic:abc123@ds241408.mlab.com:41408/webshop",
    {
      useNewUrlParser: true
    }
  );
  return client.db("webshop").collection("cart");
}

module.exports = router;

// mongodb://dmijic:abc123@ds241408.mlab.com:41408/webshop
