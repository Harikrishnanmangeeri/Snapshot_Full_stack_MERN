import React, { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getCookies } from "cookies-next";
import axios from 'axios';
const cookie = getCookies("token");

export default function ContentShowonUserProfile() {
const [content,setContent]=useState();
// console.log(cookie);
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

  return (
    <div style={containerStyle}>
<ImageList sx={imageListStyle} cols={5} rowHeight={250} gap={16}>
        {content?.map((item) => (
          <ImageListItem key={item.url} sx={imageItemStyle}>
            <img
              srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.url}?w=164&h=164&fit=crop&auto.format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
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