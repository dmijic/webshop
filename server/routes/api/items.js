const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get items
router.get("/", async (req, res) => {
  const item = await loadItemsCollection();
  res.send(await item.find({}).toArray());
});

// Add item
router.post("/", async (req, res) => {
  const item = await loadItemsCollection();
  await item.insertOne({
    itemId: req.body.itemId,
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
    itemImgUrl: req.body.itemImgUrl
  });
  res.status(201).send();
});

// Delete item
router.delete("/:id", async (req, res) => {
  const item = await loadItemsCollection();
  await item.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send();
});

async function loadItemsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://dmijic:abc123@ds241408.mlab.com:41408/webshop",
    {
      useNewUrlParser: true
    }
  );
  return client.db("webshop").collection("items");
}

module.exports = router;

// mongodb://dmijic:abc123@ds241408.mlab.com:41408/webshop
