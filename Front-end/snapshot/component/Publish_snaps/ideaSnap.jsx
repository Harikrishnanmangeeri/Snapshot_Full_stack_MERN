'use client'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Autocomplete from '@mui/material/Autocomplete';
import InfoIcon from '@mui/icons-material/Info';

const Create_idea_snap = ({ sidebarOpen }) => {
  const user = useSelector((state) => state.content.user);
  // console.log(user);

  const categories = [
    "Nature",
    "Travel",
    "Food",
    "Fashion",
    "Home Decor",
    "Art",
    "Technology",
    "Sports",
    "Pets",
    "Fitness",
    "Music",
    "Books",
    "Photography",
    "Science",
    "Gardening",
    "Movies",
    "History",
    "Cooking",
    "Travel",
    "Nature",
    "Fashion",
    "DIY Projects",
    "Travel Destinations",
    "Technology Gadgets",
    "Wildlife",
    "Education",
    "Health and Wellness",
  ];

  return (
    <Container maxWidth={sidebarOpen ? 'lg' : null}>
      <Paper elevation={0} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
        <div></div>
        <div style={{ flex: 1, textAlign: 'right', padding: '20px' }}>
          <Typography>Changes stored!</Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: 'red', color: 'white', borderRadius: '35px' }}
        >
          Publish
        </Button>
      </Paper>

      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* Image Card */}
          <Card elevation={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} style={{ padding: '0' }}>
                
                  <div style={{ position: 'relative', marginTop: '15%',marginLeft:'10px' }}>
                     <img
                      src={user}
                      alt="Uploaded Image"
                      style={{ width: '90%', height: '240px', borderRadius: '35px' }}
                    />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} style={{marginTop:'5%'}} >
                <CardContent>
                  <TextField
                    label="Title"
                    fullWidth
                    variant="outlined"
                    style={{ margin: '12px 0' }}
                  />
                  <TextField
                    label="Description"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    style={{ margin: '12px 0' }}
                  />
                  <Autocomplete
                    multiple
                    id="nature-categories"
                    options={categories}
                    defaultValue={['Nature']}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField {...params} label="Categories" placeholder="Favorites" />
                    )}
                  />
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12}>
          <div style={{ display: 'flex', alignItems: 'center' ,marginLeft: '65%' }}>
            <InfoIcon color="primary" style={{ marginRight: '8px' }} /> 
            <Typography variant="body2" color="textSecondary">
              More uploading features will be unlocked soon.
            </Typography>
          </div>
        </Grid>
    </Container>
  );
};

export default Create_idea_snap;
