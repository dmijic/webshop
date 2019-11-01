const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get discount
router.get("/", async (req, res) => {
  const discount = await loadDiscountCollection();
  res.send(await discount.find({}).toArray());
});

// Add discount
router.post("/", async (req, res) => {
  const discount = await loadDiscountCollection();
  await discount.insertOne({
    discountName: req.body.discountName,
    discountValue: req.body.discountValue
  });
  res.status(201).send();
});

// Delete discount
router.delete("/:id", async (req, res) => {
  const discount = await loadDiscountCollection();
  await discount.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send();
});

async function loadDiscountCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb://dmijic:abc123@ds241408.mlab.com:41408/webshop",
    {
      useNewUrlParser: true
    }
  );
  return client.db("webshop").collection("discounts");
}

module.exports = router;

// mongodb://dmijic:abc123@ds241408.mlab.com:41408/webshop
