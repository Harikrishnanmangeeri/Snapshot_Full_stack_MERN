require("dotenv").config();
const userschema = require("../model/user");
const reportSchema = require("../model/reported");
const contentschema = require("../model/content")
module.exports = {
  viewuser: async (req, res) => {
    try {
      const page = req.query.page || 1;
      const itemsPerPage = 9;
      const skip = (page - 1) * itemsPerPage;

      const adminUsers = await userschema.find().skip(skip).limit(itemsPerPage);

      if (adminUsers.length === 0) {
        return res.status(404).json({
          status: "fail",
          message: "No users found.",
        });
      }

      const totalUsers = await userschema.countDocuments();
      const totalPages = Math.ceil(totalUsers / itemsPerPage);

      return res.status(200).json({
        status: "success",
        message: "Successfully fetched user data.",
        data: adminUsers,
        totalPages: totalPages,
      });
    } catch (error) {
      console.error("Error fetching user list:", error);

      // Handle specific Mongoose errors//
      if (error.name === "MongoError" && error.code === 13) {
        return res.status(500).json({
          status: "error",
          message: "Database authentication error",
        });
      }
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  blockuser: async (req, res) => {
    const { user_id } = req.body;
    const userblock = await userschema.findOne({ _id: user_id });
    if (userblock) {
      if (userblock.isBlocked == true) {
        userblock.isBlocked = false;
        await userblock.save();
        return res.json(userblock);
      } else {
        userblock.isBlocked = true;
        await userblock.save();
        return res.json(userblock);
      }
    } else {
      res.json("user not found!");
    }
  },
  viewblockuser: async (req, res) => {
    try {
      const page = req.query.page || 1;
      const itemsPerPage = 9;
      const skip = (page - 1) * itemsPerPage;

      const adminblockedusers = await userschema
        .find({ isBlocked: true })
        .skip(skip)
        .limit(itemsPerPage);

      if (adminblockedusers.length === 0) {
        return res.status(404).json({
          status: "fail",
          message: "No users found.",
        });
      }

      const totalUsers = await userschema.countDocuments();
      const totalPages = Math.ceil(totalUsers / itemsPerPage);

      return res.status(200).json({
        status: "success",
        message: "Successfully fetched user data.",
        data: adminblockedusers,
        totalPages: totalPages,
      });
    } catch (error) {
      console.error("Error fetching user list:", error);

      // ------------------------------------// Handle specific Mongoose errors//-----------------------//
      if (error.name === "MongoError" && error.code === 13) {
        return res.status(500).json({
          status: "error",
          message: "Database authentication error",
        });
      }

      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  viewreports: async (req, res) => {
    try {
      const page = req.query.page || 1;
      const itemsPerPage = 9;
      const skip = (page - 1) * itemsPerPage;

      const reportcontent = await reportSchema.find().populate({
        path: 'Id',
        model: 'User'
    }).
    populate({
        path: 'content_id',
        model: 'Content',
        populate: {
            path: 'user_id',
            model: 'User'
        }
    })
      // const actionuser = await contentschema.findOne({}).populate("user_id")
        .skip(skip)
        .limit(itemsPerPage);

      if (reportcontent.length === 0 ) {
        return res.status(404).json({
          status: "fail",
          message: "No users found.",
        });
      }

      const totalUsers = await reportSchema.countDocuments();
      const totalPages = Math.ceil(totalUsers / itemsPerPage);

      return res.status(200).json({
        status: "success",
        message: "Successfully fetched user data.",
        data: reportcontent,
        totalPages: totalPages,
      });
    } catch (error) {
      console.error("Error fetching user list:", error);

      // ------------------------------------// Handle specific Mongoose errors//-----------------------//
      if (error.name === "MongoError" && error.code === 13) {
        return res.status(500).json({
          status: "error",
          message: "Database authentication error",
        });
      }

      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  },
  viewSnap:async(req,res)=>{


    try {
      const page = req.query.page || 1;
      const itemsPerPage = 9;
      const skip = (page - 1) * itemsPerPage;

      const snap = await contentschema.find().populate("user_id").skip(skip).limit(itemsPerPage);

      if (snap.length === 0) {
        return res.status(404).json({
          status: "fail",
          message: "No users found.",
        });
      }

      const totalUsers = await contentschema.countDocuments();
      const totalPages = Math.ceil(totalUsers / itemsPerPage);

      return res.status(200).json({
        status: "success",
        message: "Successfully fetched user data.",
        data: snap,
        totalPages: totalPages,
      });
    } catch (error) {
      console.error("Error fetching user list:", error);

      // Handle specific Mongoose errors//
      if (error.name === "MongoError" && error.code === 13) {
        return res.status(500).json({
          status: "error",
          message: "Database authentication error",
        });
      }

      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
 

  }
};
