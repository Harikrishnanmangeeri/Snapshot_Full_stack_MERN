require("dotenv").config();
const userschema = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { joiuserschema } = require("../model/validationschema");
const contentschema = require("../model/content");
const user = require("../model/user");
const commentschema = require("../model/comments");
const reportSchema = require('../model/reported');
const reported = require("../model/reported");
const savedSchema = require("../model/saved")
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
      } else if(email=='admin@gmail.com' && password == 'admin'){
        const token = jwt.sign('admin',process.env.ACCESS_ADMINTOKEN_SECRET);
        res.json({status: "admin",token: token,message:'adminlogin sucessfully'})
      }
      else {
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
            isBlocked:user[0].isBlocked,
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
      res.status(200).json({
        status: 'success',
        message: 'add sucessfully',
        })
    } else {
      res.status(404).json({
        status: 'error',
        message: 'failed',
        })
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
      // console.log(avatar);
      // console.log(avatars);
      res.status(200).json({
        status: 'success',
        message: 'add sucessfully',
        })
    } else {
      res.status(404).json({
        status: 'error',
        message: 'failed',
        })
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
      // console.log(banner);
      // console.log(banners);
      res.status(200).json({
        status: 'success',
        message: 'banner added sucessfully',
        })
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
      res.status(200).json({
        status: 'success',
        message: 'added to draft sucessfully',
        })
      // console.log(drafts);
    } else {
      res.json("failed");
    }
  },
  deletedraft: async (req, res) => {
    try {
      const { deletedraft } = req.body;
      // console.log("hello", deletedraft);
      const user = await userschema.findOne({ _id: res.token });
      if (user.length != 0) {
        const deletedrafts = await userschema.updateOne(
          { _id: res.token },
          { $pull: { draftContent: deletedraft } }
        );
        res.status(200).json({
          status: 'success',
          message: 'deleted sucessfully',
          })
        // console.log(deletedrafts);
      } else {
        res.json("failed");
      }
    } catch (error) {
      res.json("error", error.message);
    }
  },
  postContent: async (req, res) => {
    try {
      const { url, description, title, category } = req.body;
      // console.log(description, title, category);
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
    if (showContent) {
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
  contentUser: async (req, res) => {
    const { id } = req.body;
    const contentuser = await contentschema
      .findOne({ _id: id })
      .populate("user_id");
    if (contentuser.length !== 0) {
      res.json(contentuser);
    }
  },
  setLike: async (req, res) => {
    const { id, user_id } = req.body;
    // console.log(id,user_id);
    const likeuser = await contentschema.findOne({ _id: id });
    if (!likeuser.likes.includes(user_id)) {
      const setLike = await contentschema.updateOne(
        { _id: id },
        { $push: { likes: user_id } }
      );
      res.json(setLike);
    } else {
      const dislike = await contentschema.updateOne(
        { _id: id },
        { $pull: { likes: user_id } }
      );
      res.json(dislike);
    }
  },
  follow: async (req, res) => {
    const { user_id, follow_user } = req.body;
    // console.log(user_id, follow_user);
    const followser = await userschema.findOne({ _id: follow_user });
    const following = await userschema.findOne({ _id: user_id });
    if (
      !followser.followers.includes(user_id) &&
      !following.following.includes(follow_user)
    ) {
      const follow = await userschema.updateOne(
        { _id: follow_user },
        { $push: { followers: user_id } }
      );
      res.json(follow);

      if (follow) {
        const folloing = await userschema.updateOne(
          { _id: user_id },
          { $push: { following: follow_user } }
        );
      }
    } else {
      const unfollow = await userschema.updateOne(
        { _id: follow_user },
        { $pull: { followers: user_id } }
      );
      if (unfollow) {
        const folloing = await userschema.updateOne(
          { _id: user_id },
          { $pull: { following: follow_user } }
        );
      }
      res.json(unfollow);
    }
  },
  comment: async (req, res) => {
    const { _id, comment } = req.body;
    const comments = await contentschema.findOne({ _id: _id });
    if (comments) {
      const addComment = await commentschema.create({
        user_id:res.token,
        content_id: _id,
        comments: comment,
        created_at: Date(),
      });

      res.json(addComment);
    } else {
      res.json("comment not added");
    }
  },
  showcomment: async (req, res) => {
    const { _id } = req.body
    const showcomment = await commentschema.find({ content_id:_id }).populate("user_id")
 
    if(showcomment){
      res.json(showcomment.reverse())

    }
    else{
      res.json("no content availiable")
    }
  },
  showUserProfile: async (req, res) => {
    const { userid ,commentuserid } = req.body
    if(commentuserid){
    const showcommentuser = await userschema.findOne({_id:commentuserid})
    res.json(showcommentuser);
    }else if(userid){
    const showuser = await userschema.findOne({ _id: userid});
    res.json(showuser)
    }
},
deletecontent:async(req,res)=>{
  const { id } = req.params

  const deletesnap = await contentschema.findOne({_id:id});
  if(deletesnap){
    await contentschema.deleteOne({_id:id})
    res.status(200).json({
      status:'sucess',
      message:'Successfully deleted .',
      data:deletesnap})
  } else{
    res.status(404).json({
      status:'error',
      message:'deleting data failed.',
      data:deletesnap})
  }
  
},
reportcontent:async(req,res)=>{
  const {id,user_id,reports}= req.body 
  const Reportuser = await userschema.findOne({_id:user_id})
const  content = await contentschema.findOne({_id:id})
if(Reportuser && content){
  const reported = await reportSchema.create({
    Id:user_id,
    content_id:id,
    report:reports
  })
  res.status(200).json({
    status:'sucess',
    message:'Successfully reported .',
    data:reported})
}else{
  res.status(404).json({
    status:'error',
    message:'reported failed.',
    data:reported})
}
  
},
savesnap: async (req, res) => {
  const { user_id, content_id } = req.body;
  // console.log(user_id,content_id);
  const snap = await contentschema.findOne({ _id: content_id });
  const user = await userschema.findOne({ _id: user_id });

  if (snap && user) {
    try {
      const savesnaps = await savedSchema.create({
        Id: user_id,
        content_id: content_id,
      });

      res.status(200).json({
        status: 'success',
        message: 'Successfully reported.',
        data: savesnaps,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error: error.message,
      });
    }
  } else {
    res.status(400).json({
      status: 'error',
      message: 'Invalid user or content ID',
    });
  }
},
viewsavedSnap: async (req, res) => {
  try {
    const viewSaved = await savedSchema.find({ Id: res.token }).populate({
      path: 'content_id',
      model: 'Content',
    });

    if (viewSaved) {
      res.json({
        status: 'success',
        data: viewSaved,
      });
    } else {
      res.json({
        status: 'error',
        message: 'Error occurred in saved',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    });
  }
},
alluser:async(req,res)=>{
  const allusers = await userschema.find()
  if (allusers){
    res.json(allusers)
  }
}


};
