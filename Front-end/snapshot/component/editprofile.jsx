'use client'

import { Box, Grid, Typography, TextField, Button, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Divider } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import upload from './uploads';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Editprofile() {
  const [cookie,setCookies] =useCookies(['token_acces'])
const [avatar , setavatar] =useState(null)
// const [loading , setLoading]=useState(false)
const [Url,setUrl]=useState('')
const [isSidebarOpen, setSidebarOpen] = useState(false);
const router = useRouter()

const handleSidebarToggle = () => {
  setSidebarOpen(!isSidebarOpen);
};

console.log(avatar)

// useEffect(()=>{async function Editprofile(){
//   const profiles = await axios.put(`http://127.0.0.1:3001/api/user/Editprofile/:id/${cookie.token_acces.id}`)
 
  
// }Editprofile()},[])



const handleupload = async ()=>{
  try {
    const url= await upload(avatar)
    console.log(url)
 setUrl(url)   
 await axios.put('http://127.0.0.1:3001/api/user/Editavatar/',{
  avatar:url,
  
},{
  headers:{
    Authorization:`Bearer ${cookie.token_acces.token} `
  }
})
console.log(avatar)

  } catch (error) {
    console.log('from upload',error);
  }

}

console.log(Url);

const handlesubmit =async (e)=>{
e.preventDefault()
// await handleupload()




}

console.log(Url);


    return(
     <Grid container component="main" sx={{display: 'flex', alignItems: 'center'} }>
      {/* <CssBaseline /> */}
      <Box 
      sx={{ 
        width: 250,
        // mt: -25,
      }}
      role="presentation"
    >
      <List>
        <ListItem sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <ListItemText onClick={() => router.push('/user_profile')} primary="Edit profile" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push('/user_profile')}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
      
      <Grid 
  item
  xs={12}
  sm={8}
  md={5}
  // component={Paper}
  elevation={6}
  // square
  container
  sx={{ borderRadius: '9px' }}
>
  <Box
    sx={{
      my: 8,
      mx: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin:'3vh'
    }}
  >
    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handlesubmit} >
      <Typography component="h6" variant="h6">
    avatar
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        margin="normal"
        fullWidth
        name="Name"
        onChange={(e)=>setavatar(e.target.files[0])}
        type="file"
        id="image"
     
        InputProps={{
          style: {
            borderRadius: '9px',
          },
        }}
      />
            <Button type="submit" variant="contained" style={{ background: 'Red', color: 'white', borderRadius: '9px', margin:'10px' }} sx={{ mt: 1, mb: 1 }} onClick={handleupload}>
      Change Avatar
      </Button>
      </Box>
      {/* <TextField
        margin="normal"
        fullWidth
        name="Name"
        label="Name"
        type="text"
        id="Name"
     
        InputProps={{
          style: {
            borderRadius: '9px',
          },
        }}
      /> */}
      {/* <TextField
        margin="normal"
        fullWidth
        name="Bio"
        label="Bio"
        type="text"
        id="Bio"
     
        InputProps={{
          style: {
            borderRadius: '9px',
          },
        }}
      /> */}
      <TextField
          id="outlined-multiline-static"
          label="Bio"
          multiline
          fullWidth
          rows={4}
          // defaultValue="Default Value"
          InputProps={{
          style: {
            borderRadius: '9px',
          },
        }}
        />
     
      <Button type="submit" fullWidth variant="contained" style={{ background: 'Red', color: 'white', borderRadius: '9px' }} sx={{ mt: 3, mb: 2 }}>
      save
      </Button>
    </Box>
  </Box>
</Grid>

    </Grid>
    

    )
}



