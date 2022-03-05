const Category = require("../models/category");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const slugify = require("slugify");

exports.createCategory = catchAsyncErrors(async (req, res, next) => {
    // const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
    //     folder: "categories",
      
    //   });
  
    
      
    
      const category = await Category.create({
        name: req.body.name,
        slug: slugify(req.body.name)
        // image: {
        //   public_id: myCloud.public_id,
        //   url: myCloud.secure_url,
          
        // },
      

      });
     
      
  res.status(201).json({
    success: true,
    category,
  });
    
  });


  exports.getCategories = catchAsyncErrors(async (req, res, next) => {
    const category = await Category.find().clone();
  
    res.status(200).json({
      success: true,
      category,
    });
  });