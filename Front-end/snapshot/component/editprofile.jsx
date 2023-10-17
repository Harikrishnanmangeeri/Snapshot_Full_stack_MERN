import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
// import { useState } from 'react';


export default function Editprofile() {

// const [avatar , setavatar] =useState('')
// const [loading , setLoading]=useState(false)

// const UploadFile = async (type) =>{
//   const data = new FormData();
//   data.append("file", type === 'image')
//   // data.append("file", type === 'image'?img : video)
//   // data.append("uploadpreset", type === 'image')

//   try {
    
//   } catch (error) {
//     console.log(error);
//   }

// }

// const handlesubmit =async (e)=>{
// e.preventDefault()
// try {
//   setLoading(true);
//   const imgUrl = await UploadFile('image')
  
// } catch (error) {
//   console.log(error)
// }
// }


    return(
     <> 
     <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      
      <Grid 
  item
  xs={12}
  sm={8}
  md={5}
  component={Paper}
  elevation={6}
  square
  sx={{ borderRadius: '9px' }}
>
  <Box
    sx={{
      my: 8,
      mx: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    }}
  >
    <Image src='/Vector.svg' alt='Photos' width="70" height="30" />
    <Typography component="h2" variant="h4">
      Snapshot
    </Typography>
    <Typography component="h5" variant="h6">
     Editprofile
    </Typography>
    <Box component="form" noValidate sx={{ mt: 1 }} >
    {/* onSubmit={handlesubmit} */}
      <Typography component="h6" variant="h6">
    avatar
    </Typography>
      <TextField
        margin="normal"
        fullWidth
        name="Name"
        // label="upload"
        type="file"
        id="image"
     
        InputProps={{
          style: {
            borderRadius: '9px',
          },
        }}
      />
      <TextField
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
      />
      <TextField
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
      />
     
      <Button type="submit" fullWidth variant="contained" style={{ background: 'Red', color: 'white', borderRadius: '9px' }} sx={{ mt: 3, mb: 2 }}>
      save
      </Button>
      <Grid container>
        <Grid item xs>
         
        </Grid>
      </Grid>
    </Box>
  </Box>
</Grid>

    </Grid>
     </>



    )
}