require("dotenv").config();
const userschema = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { joiuserschema } = require("../model/validationschema");
const contentschema = require("../model/content");
// const {joicontentSchema} = require('../model/ContentValidation')
module.exports = {
  register: async (req, res) => {
    const { value, error } = joiuserschema.validate(req.body);
    const { username, password, email } = value;
    if (error) {
      res.json(error.message);
    } else {
      const user = await userschema.find({ email: email });
      if (user.length > 0) {
        return res.json("already registred");
      } else {
        await userschema.create({
          username: username,
          email: email,
          password: await bcrypt.hash(password, 10),
          created_at: Date(),
        });
        res.json("add sucessfully");
      }
    }
  },
  login: async (req, res) => {
    const { value, error } = joiuserschema.validate(req.body);
    const { email, password } = value;

    if (error) {
      res.json(error.message);
    } else {
      const user = await userschema.find({
        email: email,
      });

      if (!user) {
        return res.send("user unavaliable");
      } else {
        const checkpass = await bcrypt.compare(password, user[0].password);
        if (!checkpass) {
          return res.json("password incorrect");
        } else {
          const resp = {
            id: user[0].id,
          };
          const token = jwt.sign(resp, process.env.ACESS_USERTOKEN_SECRET, {
            expiresIn: 86400,
          });
          res.send({
            status: "sucess",
            auth: true,
            token: token,
            id: user[0].id,
          });
        }
      }
    }
  },

  profile: async (req, res) => {
    const profile = await userschema.find({ _id: res.token });
    if (profile.length !== 0) {
      res.json(profile);
    } else {
      res.status(404).json("User not found!");
    }
  },

  editprofile: async (req, res) => {
    const { bio, username, website, contact } = req.body;
    const user = await userschema.findOne({ _id: res.token });

    if (user.length != 0) {
      await userschema.findByIdAndUpdate(res.token, {
        $set: {
          username: username,
          bio: bio,
          website: website,
          contact: contact,
        },
      });
      res.json("add sucessfully");
    } else {
      res.json("failed");
    }
  },
  editavatar: async (req, res) => {
    const { avatar } = req.body;
    const user = await userschema.findOne({ _id: res.token });
    if (user.length != 0) {
      const avatars = await userschema.findByIdAndUpdate(res.token, {
        $set: {
          avatar: avatar,
        },
      });
      console.log(avatar);
      console.log(avatars);
      res.json("add sucessfully");
    } else {
      res.json("failed");
    }
  },

  editbanner: async (req, res) => {
    const { banner } = req.body;
    const user = await userschema.findOne({ _id: res.token });
    if (user.length != 0) {
      const banners = await userschema.findByIdAndUpdate(res.token, {
        $set: {
          banner: banner,
        },
      });
      console.log(banner);
      console.log(banners);
      res.json("add sucessfully");
    } else {
      res.json("failed");
    }
  },

  draft: async (req, res) => {
    const { draft } = req.body;
    const user = await userschema.findOne({ _id: res.token });
    if (user.length != 0) {
      const drafts = await userschema.updateOne(
        { _id: res.token },
        { $push: { draftContent: draft } }
      );
      res.json("added sucessfully");
      console.log(drafts);
    } else {
      res.json("failed");
    }
  },
  deletedraft: async (req, res) => {
    try {
      const { deletedraft } = req.body;
      console.log("hello", deletedraft);
      const user = await userschema.findOne({ _id: res.token });
      if (user.length != 0) {
        const deletedrafts = await userschema.updateOne(
          { _id: res.token },
          { $pull: { draftContent: deletedraft } }
        );
        res.json("deleted");
        console.log(deletedrafts);
      } else {
        res.json("failed");
      }
    } catch (error) {
      res.json("error", error.message);
    }
  },
  postContent: async (req, res) => {
    try {
      // const {value,error}=joicontentSchema.validate(req.body)
      const { url, description, title, category } = req.body;

      const user = await userschema.findOne({
        draftContent: url,
      });

      if (user) {
        await contentschema.create({
          user_id: res.token,
          url: url,
          description: description,
          title: title,
          category: category,
          created_at: Date.now(),
        });
        res.json("sucessfully");
        await userschema.updateOne(
          { _id: res.token },
          { $pull: { draftContent: url } }
        );
      }
    } catch (error) {
      res.json(error.message);
    }
  },
  showContent: async (req, res) => {
    const showContent = await contentschema.find({ user_id: res.token });
    if (showContent.length !== 0) {
      res.json(showContent);
    } else {
      res.status(404).json("User not found!");
    }
  },

  ShowAllContentHome: async (req, res) => {
    const showContenthome = await contentschema.find();
    if (showContenthome) {
      res.json(showContenthome);
    } else {
      res.status(404).json("User not found!");
    }
  },
};
