'use client'
import React, { useState, useEffect } from "react";
import { Avatar, Button, Card, CardContent, CardMedia, Typography, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { showAnotherUser } from "@/Redux/features/findcontentuser";
import axios from "axios";
import { getCookies } from "cookies-next";
const cookie = getCookies("token");

export default function ShowUserprofile({ userprofile }) {

    const [profileData, setProfileData] = useState();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(showAnotherUser(userprofile));
    },[])
   
    const Profile = useSelector((state) => state.user.showuser);
 console.log(Profile.username);
   
  

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
          setProfileData(profiles.data[0]);
        }
        profile();
      }, []);
  return (
    <Paper elevation={3} style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' , borderRadius:'35px'}}>
      {/* Banner Section */}
      <div
        style={{
          height: "400px", // Adjust the height of the banner
          width: "100%", // Adjust the width of the banner
          backgroundImage: `url(${Profile.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center", // Center the background image
          position: 'relative',
          borderRadius:'35px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: 0,
            // padding: '16px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the content horizontally
            
          }}
        >
          <Avatar alt="Your Name" src={Profile?.avatar} style={{ marginBottom: '8px' ,height:'145px', width:'145px', border:'5px solid white'}} />
          <Typography variant="h5" style={{ color: 'black' }}>
            {Profile?.username}
          </Typography>
          <Typography variant="body1">{Profile?.bio}</Typography>
        </div>
      </div>

      {/* Bio Section */}
      <div style={{ padding: '16px' }}>

      </div>

      {/* Follower/Following Counts Section */}
      <div style={{ padding: '16px' }}>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              <strong>Followers:</strong> {Profile?.followers?.length}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              <strong>Following:</strong> {Profile?.following?.length}
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* Follow Button Section */}
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <Button variant="outlined" color="primary" style={{ borderRadius: '20px' }}>
          {Profile.followers?.includes(Profile._id) ? (
            <Typography>Following</Typography>
          ) : (
            <Typography>Follow</Typography>
          )}
        </Button>
      </div>
    </Paper>
  );
}