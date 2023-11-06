'use client'
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector,} from "react-redux";
import { finduser, showcomments } from "@/Redux/features/findcontentuser";

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
};

const Card = () => {
  const [content,setContent]=useState();
const dispatch=useDispatch()
const router = useRouter()


const handleContent = (id)=>{

dispatch(finduser(id))
dispatch(showcomments(id))
  router.push(`/showsnap/${id}`)
}



  useEffect(() => {
    async function content() {
      const contents = await axios.get("http://127.0.0.1:3001/api/user/ShowAllContentHome");
      setContent(contents.data);
    }
    content();
  }, []);
  return (
    <Box>
      <ImageList variant="masonry" cols={6} gap={8}>
      {content?.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.url}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ ...commonStyles, borderRadius: '16px' }}
              onClick={()=>handleContent(item._id)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Card