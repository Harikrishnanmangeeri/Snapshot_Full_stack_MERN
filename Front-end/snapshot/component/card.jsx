import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { finduser, showcomments } from "@/Redux/features/findcontentuser";
import { Stack } from "@mui/material";
import axiosInstance from "@/Redux/axios";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
};

const Cardhome = () => {
  const [content, setContent] = useState();
  const [alluser, setalluser] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const search = useSelector((state) => state.content.search);

  useEffect(() => {
    async function fetchContent() {
      const contents = await axiosInstance.get("user/ShowAllContentHome");
      setContent(contents.data);
    }
    fetchContent();
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      const allUsers = await axiosInstance.get("user/allUser");
      setalluser(allUsers.data);
    }
    fetchUsers();
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleContent = (id) => {
    dispatch(finduser(id));
    dispatch(showcomments(id));
    router.push(`/showsnap/${id}`);
  };

  const filteredUsers = alluser?.filter((item) =>
    item.username.includes(search)
  );
  const filteredContent = content?.filter((item) =>
    item.title.includes(search)
  );

  return (
    <Box>
      {search && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={2}
          sx={{ overflowX: "auto" }}
        >
          {filteredUsers?.map((user) => (
            <Grid item key={user._id}>
              <Card sx={{ borderBottom: "1px solid #ccc", padding: "10px", width: "100%", height: "100%" }}>
                <Typography variant="h6">{user.username}</Typography>
                <img
                  src={user.avatar}
                  alt={user.username}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Stack>
      )}

      <ImageList variant="masonry" cols={isMobile ? 2 : 6} gap={8}>
  {filteredContent?.reverse().map((item) => (
    <ImageListItem key={item._id} sx={{ borderRadius: "16px", marginBottom: "10px", overflow: "hidden" }}>
      <img
        src={`${item.url}?w=248&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          cursor: "pointer",
          borderRadius: "16px", // Add border radius to the image
        }}
        onClick={() => handleContent(item._id)}
      />
    </ImageListItem>
  ))}
</ImageList>

    </Box>
  );
};

export default Cardhome;
