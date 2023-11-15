import React, { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getCookies } from "cookies-next";
import axios from 'axios';
import Showingsnapprofile from "./showingsnapprofile";
const cookie = getCookies("token");

export default function ContentShowonUserProfile() {
const [content,setContent]=useState();

console.log(content);
useEffect(() => {
  async function content() {
    const contents = await axios.get(
      "http://127.0.0.1:3001/api/user/showcontent",
      {
        headers: {
          Authorization: `Bearer ${cookie.token} `,
        },
      }
    );
    setContent(contents.data);
  }
  content();
}, []);

const handlesnap = () =>{

}

  return (
    <div style={containerStyle}>
<ImageList sx={imageListStyle} cols={5} rowHeight={250} gap={16}>
        {content?.map((item) => (
          
          <Showingsnapprofile item={item}/>
        ))}
      </ImageList>
    </div>
  );
}

const containerStyle = {
  height: '600px', // Set a fixed height
  overflow: 'hidden', // Hide overflow (scrollbars)
};

const imageListStyle = {
  width: '100%',
  height: 'auto',
};

const imageItemStyle = {
  borderRadius: '25px', // Add border radius of 25px
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow to each image
  overflow: 'hidden', // Hide overflow for images
};


// Nothing to show...yet! Pins you create will live here.