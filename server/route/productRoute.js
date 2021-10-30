const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getProductDetail,
} = require("../controllers/productController");
const router = express.Router();

//Rest API Product
router.route("/products").get(getAllProducts);

router.route("/product/newProduct").post(createProducts);
router
  .route("/product/:id")
  .put(updateProducts)
  .delete(deleteProducts)
  .get(getProductDetail);

module.exports = router;
