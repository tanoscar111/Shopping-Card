const express = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getProductDetail,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const router = express.Router();

const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/auth.js");
//Rest API Product
router.route("/products").get(getAllProducts);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllProducts);
router
  .route("/admin/product/newProduct")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProducts);
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProducts)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProducts)
  .get(isAuthenticatedUser, authorizeRoles("admin"), getProductDetail);
router.route("/product/:id").get(getProductDetail);
router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(getProductReviews);
router.route("/deleteReviews").delete(isAuthenticatedUser, deleteReview);
module.exports = router;
