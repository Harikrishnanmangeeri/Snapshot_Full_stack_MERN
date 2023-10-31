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

const Create_idea_snap = ({sidebarOpen }) => {
  const user = useSelector(state=>state.content.user)
  console.log(user);

  
  return (
    <Container maxWidth={sidebarOpen ? "lg" : null}>
 <Paper  elevation={0} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
    <div></div>
    <div style={{ flex: 1, textAlign: 'right' ,padding:'20px' }}>
        <Typography >
            Changes stored!
        </Typography>
    </div>
    <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: 'red', color: 'white' , borderRadius:'35px' }}
    >
        Publish
    </Button>
</Paper>


      <Divider />
      <Grid container spacing={3} >
        <Grid item xs={12} >
          {/* Image Card */}
          <Card elevation={0}>
          <Paper elevation={0} style={{ padding: '0' }}>
              <div style={{ position: 'relative', marginTop:'20px'}}>
                <img
                  src={user}
                  alt="Uploaded Image"
                  style={{ width: '30%', height: '240px', borderRadius: '35px' }}
                />
                
              </div>
            </Paper>
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
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {/* Add more image cards or other content here */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Create_idea_snap;
