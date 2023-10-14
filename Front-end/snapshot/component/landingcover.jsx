'use client'
import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  { title: 'Get your next', imageUrl: '' },
  { title: 'Chai time snacks idea', imageUrl: '/path-to-your-image-2.jpg' },
  { title: 'Home decor idea', imageUrl: '/path-to-your-image-3.jpg' },
];

export default function LandingCover() {
  return (
    <Box>
      <Card sx={{ minWidth: 300, minHeight: "80vh", flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source
              src="/mainvid.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Carousel
            autoPlay
            showThumbs={false}
            interval={2000} // Auto slide every 2 seconds (2000 milliseconds)
            infiniteLoop
          >
            {images.map((item, index) => (
              <div key={index}>
                <img src={item.imageUrl} alt={item.title} />
                <Typography style={{ fontFamily: 'Raleway', color: '#fff' }}>
                  {item.title}
                </Typography>
              </div>
            ))}
          </Carousel>
        </CardContent>
      </Card>
    </Box>
  );
}
