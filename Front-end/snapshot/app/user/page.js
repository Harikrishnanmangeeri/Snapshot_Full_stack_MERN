
'use client'
import React from 'react'
import {Box}  from '@mui/material';
import Card from '@/component/card';
import { useEffect } from 'react'


function page() {
  useEffect(()=>{
    if(!window.location.hash){
      window.location=window.location+'#hello'
      location.reload(false)
    }
  },[])

  return (
     <Box sx={{bgcolor: '#fffff', height: '100vh' }} ><Card/></Box>
  )
}

export default page