const Product = require("../models/productModels");
const ErrorHander = require("../util/errorhandel");
const catchAsynErrors = require("../middleware/catchAsynErrors");
const ApiFeatures = require("../util/apiFeature");
const cloudinary = require("cloudinary");
//create Product --admin
exports.createProducts = catchAsynErrors(async (req, res, next) => {
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "products",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }

  // req.body.images = imagesLinks;
  console.log("TCL: exports.createProducts -> req.body.images", req.body.images)
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  console.log("TCL: exports.createProducts -> req.body", req.body)

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
  });
});
//update Product admin
exports.updateProducts = catchAsynErrors(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  // Images Start Here
  // let images = [];
  // let images2 = [];
  // if (
  //   typeof req.body.images === "string" &&
  //   typeof req.body.images2 === "string"
  // ) {
  //   images.push(req.body.images);
  //   images2.push(req.body.images2);
  // } else {
  //   images = req.body.images;
  //   images2 = req.body.images2;
  // }

  // if (images !== undefined) {
  //   // Deleting Images From Cloudinary
  //   for (let i = 0; i < product.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  //   }

  //   const imagesLinks = [];

  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "products",
  //     });

  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }

  //   req.body.images = imagesLinks;
  // }
  // if (images2 !== undefined) {
  //   // Deleting Images From Cloudinary
  //   for (let i = 0; i < product.images2.length; i++) {
  //     await cloudinary.v2.uploader.destroy(product.images2[i].public_id);
  //   }

  //   const imagesLinks2 = [];

  //   for (let i = 0; i < images2.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images2[i], {
  //       folder: "products",
  //     });

  //     imagesLinks2.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     });
  //   }

  //   req.body.images2 = imagesLinks2;
  // }
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
    return next(new ErrorHander("Product not found", 404));
  }

  // Deleting Images From Cloudinary
  // for (let i = 0; i < product.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  // }
  // for (let i = 0; i < product.images2.length; i++) {
  //   await cloudinary.v2.uploader.destroy(product.images2[i].public_id);
  // }
  await product.remove();
  res.status(200).json({
    sucess: true,
    message: "product is delete Success",
  });
});
exports.createProductReview = catchAsynErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    product,
  });
});
//get All Product Review
exports.getProductReviews = catchAsynErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});
// Delete Review
exports.deleteReview = catchAsynErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
