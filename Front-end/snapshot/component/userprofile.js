'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardCover from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';

export default function UserProfile() {
  return (
    <Box>
      <Card sx={{ minWidth: 300, minHeight: "80vh", flexGrow: 1 ,alignItems: 'center'}}>
      <CardCover
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
<Box><img
    src="/blog1.jpg"
    alt="User Profile Cover"
    style={{ width: 1000, height: '50vh', objectFit: 'cover' , borderRadius: '25px'}}
    
  />
  
  <IconButton position="relative">
              <EditIcon />
            </IconButton></Box>
  
</CardCover>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Avatar
              alt="User Avatar"
              src="/hari.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <div>
              <Typography variant="h5">User Name</Typography>
              <Typography variant="subtitle1" color="textSecondary">Name</Typography>
            </div>
            <div>
              <Typography variant="subtitle1">
                <strong>Followers:</strong> 2.4M
              </Typography>
              <Typography variant="subtitle1">
                <strong>Following:</strong> 983
              </Typography>
            </div>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="outlined" startIcon={<ShareIcon />}>
              Share
            </Button>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
