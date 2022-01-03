const catchAsyncErrors = require("./catchAsyncErrors");
exports.isUserAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies;
  console.log(token);
});
