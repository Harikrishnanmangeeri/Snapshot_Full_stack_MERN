'use client'
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
} from "@mui/material";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookies } from "cookies-next";
const cookie = getCookies("token");

const Show_snap = () => {
//   const dispatch = useDispatch();
  const router = useRouter();
  const [comment, setComment] = useState("");
 
  const content = useSelector((state)=>state.user)
//   console.log(content.content.likes, content.content.comments);


  const handleAddComment = () => {
    if (comment.trim() !== "") {
      // Dispatch the addComment action with the comment and post ID
      // dispatch(addComment(comment, postId)); // Replace postId with the actual post ID
      setComment("");
    }
  };

  const handleLike = () => {
    // Dispatch the likePost action with the post ID
    // dispatch(likePost(postId)); // Replace postId with the actual post ID
  };

  return (
    <Container maxWidth="mg" >
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

            <CardContent>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "35px",
                    marginTop: "20px",
                    width: "20%",
                    margin: "0 auto",
                  }}
                >
                  Save
                </Button>
              </div>
            </CardContent>
         
          
            <Box  marginTop="20px">
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
                    <Typography variant="subtitle1">{content.content.user_id?.username}</Typography>
                    <Typography variant="body2">followers:{content.content.user_id?.followers}</Typography>
                  </div>
                </div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderRadius: "35px",
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
              <FavoriteIcon color="secondary" />
            </IconButton>
            <Typography variant="body2">Likes: {content.content?.likes}</Typography>
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
      style={{ marginTop: "10px", borderRadius: "35px" }}
    >
      Add Comment
    </Button>
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
