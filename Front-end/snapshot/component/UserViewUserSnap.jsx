'use client'
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Viewsnapuser() {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    // Fetch content data or set it from props
    // Example: setContentData({ image: "url", comments: [], likes: 10, title: "Title", description: "Description" });
  }, []); // Adjust the dependency array based on your requirements

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleReportOptionChange = (event) => {
    setReportOption(event.target.value);
  };



  return (
    <div>
      <IconButton onClick={handleOpen} sx={{ border: "1px double white" }}>
        <ReportOutlinedIcon />
      </IconButton>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Container maxWidth="md">
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
              src={content.url}
              alt="Uploaded Image"
              style={{
                maxWidth: "100%", 
                maxHeight: "560px", 
                objectFit: "contain",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px", 
                border: "none", 
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
                  src={content.user_id?.avatar}
                  alt={content.user_id?.username}
                  style={{ marginRight: "10px" }}
                  onClick={()=>handleShowuser()}
                />
                <div>
                  <Typography variant="subtitle1"   onClick={()=>handleShowuser()}>
                    {content.user_id?.username}
                  </Typography>
                
                </div>
              </div>
         
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
                  {content?.likes?.includes(profile?._id) ? (
                    <FavoriteOutlinedIcon style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderOutlinedIcon style={{ color: "black" }} />
                  )}
                </IconButton>
                <Typography variant="body2">
                  {content?.likes?.length}
                </Typography>
              </div>
              <div style={{ display: 'flex'}}>
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
                <div><Reportcontent/></div>
              
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
                {content.title}
              </Typography>
              <Typography variant="body1" style={{ lineHeight: "1.5" }}>
                {content.description}
              </Typography>
            </div>
          </div>

          <div>
            <div
              style={{
                height: "200px", 
                overflowY: "auto", 
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
                    marginBottom: "10px", 
                  }}
                >
                  <Avatar
                    src={comment.user_id.avatar}
                    alt={comment.user_id.username}
                    style={{ marginRight: "10px" }}
                    onClick={()=>handleShowuser(comment.user_id?._id)}
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
      <IconButton
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "10px",
            }}
          >
            <CloseIcon />
            </IconButton>
    </Container>
      </Modal>
    </div>
  );
}
