"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardCover from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookies } from "cookies-next";
import Usertab from "./created_saved_in profile";
import EditbannerModal from "./Editbannermodal";
const cookie = getCookies("token");

export default function UserProfile() {
  const [profile, setprofile] = useState();

  const router = useRouter();
  // console.log(banner);


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
      setprofile(profiles.data);
    }
    profile();
  }, []);

  return (
    <>
          <Box >
        <Card
          sx={{
            minWidth: 300,
            minHeight: "70vh",
            flexGrow: 1,
            alignItems: "center",
          }}
          style={{boredr:'none'}}
        >
          <CardCover
            sx={{
              display: "relative", 
            width: "100%",
            height: "50vh",
            position: "relative",
          }}
        >
          {profile?.map((data) => (
            <img
              src={data.banner}
              alt="User Profile Cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "25px",
              }}
            />
          ))}
          
          <div
            style={{
              position: "absolute",
              top: "10px", 
              right: "10px", 
            }}
          >
            <EditbannerModal />
          </div>

     
          <div
            style={{
              position: "absolute",
              bottom: "-50px", 
              left: "50%",
              transform: "translateX(-50%)", 
            }}
          >
            {profile?.map((data) => (
              <Avatar
                alt="User Avatar"
                src={data.avatar}
                sx={{ width: 150, height: 150 ,border: '6px solid white'  }}
              />
            ))}
          </div>
        </CardCover>
        <CardContent>
            {profile?.map((data) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                style={{
              padding: "30px",
              background: "#f5f5f5",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
                key={data._id}
              >
                <div>
                  <Typography variant="h5">{data.username}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {data.email}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h5">{data.bio}</Typography>
                  {/* <Typography variant="subtitle1" color="textSecondary">{data.contact}</Typography> */}
                </div>
                <div>
                  <Typography variant="h5">{data.website}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {data.contact}
                  </Typography>
                </div>
                <div>
                  <Typography variant="subtitle1">
                    <strong>Followers:</strong> {data.followers?.length}
                  </Typography>
                  <Typography variant="subtitle1">
                    <strong>Following:</strong> {data.following?.length}
                  </Typography>
                </div>
                <div>
                  <Button variant="outlined" >
                  <ShareIcon />
              </Button>
              <IconButton  onClick={() => router.push("/edit_profile")}>
                <EditIcon />
              </IconButton>
                </div>
             
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
      <Usertab />
    </>
  );
}
