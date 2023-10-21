'use client'
import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { getCookies } from 'cookies-next';
import Usertab from './created_saved_in profile';
const cookie = getCookies('token')


export default function UserProfile() {
const [profile,setprofile]=useState()
const router = useRouter()
// console.log(cookie.token);
// console.log(profile);

  
useEffect(()=>{async function profile(){
   const profiles = await axios.get('http://127.0.0.1:3001/api/user/profile',
   {
    headers: {
      Authorization: `Bearer ${cookie.token} `,
      
    },
  })
   setprofile(profiles.data)
}profile()},[])
 




  return (
    <>
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
        {profile?.map((data)=>(
        
       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} key={data._id}>
          
            <Avatar
              alt="User Avatar"
              src={data.avatar}
              sx={{ width: 100, height: 100 }}
            />
            <div>
              <Typography variant="h5">{data.username}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{data.email}</Typography>
            </div>
            <div>
              <Typography variant="h5">{data.bio}</Typography>
              {/* <Typography variant="subtitle1" color="textSecondary">{data.contact}</Typography> */}
            </div>
            <div>
              <Typography variant="h5">{data.website}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{data.contact}</Typography>
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
         ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Button variant="outlined" startIcon={<ShareIcon />}>
              Share
            </Button>
            <IconButton onClick={() => router.push('/edit_profile')}>
              <EditIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
    <Usertab/>
    </>
  );
}
