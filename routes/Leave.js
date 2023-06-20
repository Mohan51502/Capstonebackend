const express = require("express");
const leavedb = require("../models/LeaveSchema");
const router = express.Router();


/////create Query

router.post("/create", async (req, res) => {

    const { days, from, to,reason } = req.body;
  
    if (!days || !from || !to || !reason) {
        res.status(422).json({ error: "fill all the details" })
    }
  
    try {
  
      const finalleave = new leavedb({
        days, from, to,reason
    });
  
    // here password hasing
  
    const storeData = await finalleave.save();

  
    // console.log(storeData);
    res.status(200).json({ status: 200, storeData })
  
    } catch (error) {
        //res.status(400).json(error);
        console.log("catch block error");
    }
  
  });
  
  
  
  
  router.get("/getUserLeave/:_id", async function (req, res, next) {
    try {
        console.log(req.params._id)
  
  
      const response = await leavedb.findOne({_id:req.params._id});
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
  
  router.get("/getAllLeave", async function (req, res, next) {
    try {
      const response = await leavedb.find();
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
  
  
  

module.exports = router;
