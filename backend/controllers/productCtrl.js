const Product = require("../models/productModel");
const ErrorHandler = require("../utils/ErrorHandler");
const SearchSort = require("../utils/SearchSort");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Creating the project -- Admin Privilages
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// get the list of all the products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  numberOfResults = 5;
  const search = new SearchSort(Product.find(), req.query)
    .search()
    .filter()
    .pagination(numberOfResults);
  const products = await search.query;
  // const products = await Product.find();
  if (!products) {
    return next(new ErrorHandler("Product Not found!!", 404));
  }
  return res.status(200).json({ success: true, products });
});

exports.updateProducts = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found!!!", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, product });
});

exports.deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found!!!", 404));
  }
  await product.remove();
});

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found!!!", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});
