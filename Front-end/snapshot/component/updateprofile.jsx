'use client'
import React, { useState } from "react";
import axios from "axios";
import { getCookies } from 'cookies-next';
const cookie = getCookies('token')

import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { useRouter } from 'next/navigation'
export default function UpdateProfile() {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const bio = e.target.bio.value;
    const username = e.target.username.value;
    const website = e.target.website.value;
    const contact = e.target.contact.value;

   
    try {
        if (cookie.token) {
        
          await axios.put(
            'http://127.0.0.1:3001/api/user/Editprofile',
            {
              bio: bio,
              website: website,
              contact: contact,
              username: username,
            },
            {
              headers: {
                Authorization: `Bearer ${cookie.token} `,
                
              },
            }
           
          );
  
          router.push("/user_profile");
          console.log('success');
        } else {
          console.error('Token is missing in cookies.');
        
        }
      } catch (error) {
        console.error('from send',error);
      }
    e.target.reset();
  };

  return (
    <Container component="main">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={5} sx={{ borderRadius: "9px" }}>
          <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", alignItems: "center", margin: "3vh" }}>
            <Typography component="h1" variant="h5">
              Update Profile
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <TextField fullWidth label="Bio" name="bio" variant="outlined" />
              <TextField fullWidth label="Username" name="username" variant="outlined" />
              <TextField fullWidth label="Website" name="website" variant="outlined" />
              <TextField fullWidth label="Contact" name="contact" variant="outlined" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  background: "Red",
                  color: "white",
                  borderRadius: "9px",
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
