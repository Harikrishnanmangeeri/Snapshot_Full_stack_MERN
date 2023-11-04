"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SendSharpIcon from "@mui/icons-material/SendSharp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookies } from "cookies-next";
import { finduser, setlike } from "@/Redux/features/findcontentuser";
const cookie = getCookies("token");

const Show_snap = ({url}) => {
    const dispatch = useDispatch();
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [profile, setprofile] = useState();
  

  const content = useSelector((state) => state.user);
    console.log(profile);
    useEffect(()=>{
      function reload() {
        dispatch(finduser(url))
      }
      reload()
    })

const likes = useSelector((state) => state.user.like)
console.log(likes);
    useEffect(() => {
      async function profile() {
        const profiles = await axios.get(
          "http://127.0.0.1:3001/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${cookie.token} `,
            },
          }
        );
        setprofile(profiles.data[0]);
       
      }
      profile();
    }, []);

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      // Dispatch the addComment action with the comment and post ID
      // dispatch(addComment(comment, postId)); // Replace postId with the actual post ID
      setComment("");
    }
  };

  const handleLike = () => {
    dispatch(setlike({id:content.content._id,user_id:profile._id}))
    location.reload()
  };

  return (
    <Container maxWidth="mg">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="stretch"
        style={{
          background: "#f5f5f5",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        {/* Left Section */}
        <Box flex="1" style={{ marginRight: "10px" }}>
          <img
            src={content.content.url}
            alt="Uploaded Image"
            style={{
              width: "100%",
              height: "560px",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>

        {/* Right Section */}
        <Box flex="1" style={{ marginLeft: "10px" }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
  <div>
    <Button
      variant="contained"
      color="primary"
      type="submit"
      style={{
        backgroundColor: "red",
        color: "white",
        borderRadius: "35px",
        marginLeft:"21px",
        width: "20%",
        margin: "0 auto",
      }}
    >
      Save
    </Button>
  </div>
  
  <div>
    <IconButton onClick={()=>router.push('/user')}>
      <ArrowBackIcon />
    </IconButton>
  </div>
</Stack>

          <Box marginTop="20px">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                background: "#f5f5f5",
                borderRadius: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={content.content.user_id?.avatar}
                  alt={content.content.user_id?.username}
                  style={{ marginRight: "10px" }}
                />
                <div>
                  <Typography variant="subtitle1">
                    {content.content.user_id?.username}
                  </Typography>
                  <Typography variant="body2">
                    followers:{content.content.user_id?.followers}
                  </Typography>
                </div>
              </div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#EAEAEA",
                  color: "black",
                  borderRadius: "35px",
                  border: "none",
                }}
              >
                Follow
              </Button>
            </div>
          </Box>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 20px",
              background: "#f5f5f5",
              borderRadius: "20px",
              marginTop: "20px",
            }}
          >
            <IconButton color="primary" onClick={handleLike}>
             {content.content?.likes?.includes(profile?._id)?<FavoriteOutlinedIcon style={{ color: "red" }} /> :<FavoriteBorderOutlinedIcon style={{ color: "black" }} />}
            </IconButton>
            <Typography variant="body2">
              Likes: {content.content?.likes?.length}
            </Typography>
          </div>
          <div
            style={{
              height: "300px", // Set a fixed height for the comment section
              overflowY: "auto", // Add vertical scroll if content exceeds the height
              padding: "20px",
              background: "#f5f5f5",
              borderRadius: "20px",
              marginTop: "20px",
            }}
          >
            <Stack direction="row" spacing={2}>
              <TextField
                label="Add a comment"
                fullWidth
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddComment}
                style={{ borderRadius: "35px" }}
              >
                <SendSharpIcon />
              </Button>
            </Stack>
            <div key={comment.id}>
              <p>{content.content?.comments}</p>
              {/* <p> {comment.place}</p> */}
              <Divider />
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Show_snap;
