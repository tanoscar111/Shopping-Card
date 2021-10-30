const Product = require("../models/productModels");
const ErrorHander = require("../util/errorhandel");
const catchAsynErrors = require("../middleware/catchAsynErrors");
const ApiFeatures = require("../util/apiFeature");

//create Product --admin
exports.createProducts = catchAsynErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

exports.getAllProducts = catchAsynErrors(async (req, res, next) => {
  const resultPerPage = 5;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  let products = await apiFeature.query;
  const TotalPage = products.length;
  const lasTotalPage = TotalPage / resultPerPage + 1;

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    lasTotalPage,
    TotalPage,
    lasTotalPage,
  });
});
exports.getProductDetail = catchAsynErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }
  res.status(200).json({
    sucess: true,
    product,
    productsCount,
  });
});
//update Product admin
exports.updateProducts = catchAsynErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      sucess: false,
      message: "product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    usefindandmodify: false,
  });
  res.status(200).json({
    sucess: true,
    product,
  });
});
//DeleteProduct
exports.deleteProducts = catchAsynErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      sucess: false,
      message: "product not found",
    });
  }
  await product.remove();
  res.status(200).json({
    sucess: true,
    message: "product is delete Success",
  });
});
