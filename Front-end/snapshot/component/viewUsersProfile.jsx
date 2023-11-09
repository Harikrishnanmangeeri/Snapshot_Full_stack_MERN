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
    <Paper elevation={3} style={{ borderRadius: '8px', overflow: 'hidden' }}>
    {/* Banner Section */}
    <div
      style={{
        height: "150px",
        backgroundImage: `url(${Profile.banner})`,
        backgroundSize: "cover",
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          padding: '16px',
          width: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar alt="Your Name" src={Profile.avatar} />
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ color: '#fff' }}>
              {Profile.username}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>

    {/* Bio Section */}
    <div style={{ padding: '16px' }}>
      <Typography variant="body1">{Profile.bio}</Typography>
    </div>

    {/* Follower/Following Counts Section */}
    <div style={{ padding: '16px' }}>
      <Grid container justifyContent="space-around">
        <Grid item>
          <Typography variant="body1" color="textSecondary">
            <strong>Followers:</strong> {Profile.followers.length}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="textSecondary">
            <strong>Following:</strong> {Profile.following.length}
          </Typography>
        </Grid>
      </Grid>
    </div>

    {/* Follow Button Section */}
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <Button
        variant="outlined"
        color="primary"
        style={{ borderRadius: '20px' }}
      >
        {Profile.followers.includes(Profile._id) ? (
          <Typography>Following</Typography>
        ) : (
          <Typography>Follow</Typography>
        )}
      </Button>
    </div>
  </Paper>
  );
}