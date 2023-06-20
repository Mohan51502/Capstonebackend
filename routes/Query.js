const express = require("express");
const router = express.Router();
const querydb = require("../models/QuerySchema")


/////create Query

router.post("/create", async (req, res) => {

    const { category, voice, title,desc } = req.body;
  
    if (!category || !voice || !title || !desc) {
        res.status(422).json({ error: "fill all the details" })
    }
  
    try {
  
      const finalQuery = new querydb({
        category, voice, title,desc
    });
  
    // here password hasing
console.log(finalQuery)
  
    const storeData = await finalQuery.save();
    console.log("usre")

  
    // console.log(storeData);
    res.status(200).json({ status: 200, storeData })
  
    } catch (error) {
        //res.status(400).json(error);
        console.log("catch block error");
    }
  
  });
  
  
  
  
  router.get("/getUserQuery/:_id", async function (req, res, next) {
    try {
        console.log(req.params._id)
  
  
      const response = await querydb.findOne({_id:req.params._id});
     // if (response.length > 0) {
        res.status(200).json({
          message: "Users Fetched Successfully!!!",
          data: response,
          success: true,
        });
    //   } else {
    //     res.status(200).json({
    //       message: "No Users!!!",
    //       success: false,
    //     });
    //   }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error,
        success: false,
      });
    }
  });
  
  ////////getuser
  
  router.get("/getAllQuery", async function (req, res, next) {
    try {
      const response = await querydb.find();
      if (response.length > 0) {
        res.status(201).json({
          message: "Users Fetched Successfully!!!",
          data: response,
          success: true,
        });
      } else {
        res.status(200).json({
          message: "No Users!!!",
          data: [],
          success: false,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error,
        success: false,
      });
    }
  });


  /////
  router.get("/getAllQuery/:_id", async function (req, res, next) {
    try {
        console.log(req.params._id)


      const response = await querydb.findOne({_id:req.params._id});
     // if (response.length > 0) {
        res.status(200).json({
          message: "Users Fetched Successfully!!!",
          data: response,
          success: true,
        });
    //   } else {
    //     res.status(200).json({
    //       message: "No Users!!!",
    //       success: false,
    //     });
    //   }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        error: error,
        success: false,
      });
    }
  });
  
  
  

module.exports = router;
