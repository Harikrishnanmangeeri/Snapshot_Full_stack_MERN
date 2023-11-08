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
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookies } from "cookies-next";
import {
  addComment,
  finduser,
  follow,
  setlike,
  showcomment,
} from "@/Redux/features/findcontentuser";
const cookie = getCookies("token");

const Show_snap = ({ url }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [profile, setprofile] = useState();

  const content = useSelector((state) => state.user);
  const show = useSelector((state) => state.user.showcomment);
  console.log(show);
  useEffect(() => {
    function reload() {
      dispatch(finduser(url));
    }
    reload();
  }, [dispatch]);

  const likes = useSelector((state) => state.user.like);

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
      dispatch(
        addComment({ comment, id: content.content._id, user_id: profile._id })
      ); // Replace postId with the actual post ID
      setComment("");
    }
  };

  const handleLike = () => {
    dispatch(setlike({ id: content.content._id, user_id: profile._id }));
    location.reload();
  };

  const handlefollow_unfollow = () => {
    dispatch(follow({ user_id: profile._id, id: content.content.user_id._id }));
  };
  //user_id==currentuser,, //id == follow

  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }

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
        <Box
          flex="1"
          style={{
            marginRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={content.content.url}
              alt="Uploaded Image"
              style={{
                maxWidth: "100%", // Set maximum width to 100% for responsiveness
                maxHeight: "560px", // Set a fixed maximum height
                objectFit: "contain",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px", // Add border-radius to the image
                border: "none", // Remove border
              }}
            />
          </div>
        </Box>

        {/* Right Section */}
        <Box flex="1" style={{ marginLeft: "10px" }}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <div></div>

            <div>
              <IconButton onClick={() => router.push("/user")}>
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
                    followers: {content.content.user_id?.followers?.length}
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
                onClick={() => handlefollow_unfollow()}
              >
                {content.content.user_id?.followers.includes(profile?._id) ? (
                  <Typography>following</Typography>
                ) : (
                  <Typography>follow</Typography>
                )}
              </Button>
            </div>
          </Box>

          <div
            style={{
              padding: "20px",
              background: "#f5f5f5",
              borderRadius: "20px",
              marginTop: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="primary"
                  onClick={handleLike}
                  style={{ marginRight: "10px" }}
                >
                  {content.content?.likes?.includes(profile?._id) ? (
                    <FavoriteOutlinedIcon style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
                  )}
                </IconButton>
                <Typography variant="body2">
                  {content.content?.likes?.length}
                </Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "35px",
                    marginLeft: "21px",
                    width: "20%",
                    margin: "0 auto",
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
            <div>
              <Typography
                variant="h5"
                style={{
                  marginBottom: "10px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {content.content.title}
              </Typography>
              <Typography variant="body1" style={{ lineHeight: "1.5" }}>
                {content.content.description}
              </Typography>
            </div>
          </div>

          <div>
            <div
              style={{
                height: "200px", // Set a fixed height for the comments container
                overflowY: "auto", // Add a vertical scrollbar when needed
                padding: "20px",
                background: "#f5f5f5",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            >
              {show?.map((comment) => (
                <div
                  key={comment.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px", // Add margin between comments
                  }}
                >
                  <Avatar
                    src={comment.user_id.avatar}
                    alt={comment.user_id.username}
                    style={{ marginRight: "10px" }}
                  />
                  <div>
                    <p>{comment.comments}</p>
                    <p
                      style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.5)" }}
                    >
                      {formatDate(comment.created_at)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src={profile?.avatar}
                alt="Current User"
                style={{ marginRight: "10px" }}
              />
              <TextField
                label="Add a comment"
                fullWidth
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={handleAddComment}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "35px",
                  margin: "10px",
                  padding: "12px",
                }}
              >
                <SendSharpIcon />
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Show_snap;
