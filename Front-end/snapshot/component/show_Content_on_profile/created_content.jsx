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
<ImageList sx={imageListStyle} cols={5} rowHeight="auto" gap={16}>
        {content?.map((item) => (
          
          <Showingsnapprofile item={item}/>
        ))}
      </ImageList>
    </div>
  );
}

const containerStyle = {

  overflow: 'hidden', // Hide overflow (scrollbars)
};

const imageListStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '25px'
};




// Nothing to show...yet! Pins you create will live here.