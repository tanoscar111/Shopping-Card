const Product = require("../models/productModels");

//create Product --admin
exports.createProducts = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json(product);
  res.status(201).json({
    sucess: true,
    product,
  });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    sucess: true,
    products,
  });
};
exports. getProductDetail=async(req,res)=> {
    const product =await Product.findById(req.params.id);
    if (!product) {
        res.status(500).json({
          sucess: false,
          message: "product not found",
        });
      }
      res.status(200).json({
        sucess: true,
        product,
      });
}
//update Product admin
exports.updateProducts = async (req, res) => {
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
};
//DeleteProduct
exports.deleteProducts = async (req, res) => {
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
};
