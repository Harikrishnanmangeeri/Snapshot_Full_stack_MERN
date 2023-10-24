'use client'
import React from 'react';
import { Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

const categories = [
  {
    name: "Nature",
    imageSrc: "https://source.unsplash.com/400x300/?nature",
    quote: "Discover the beauty of nature.",
  },
  {
    name: "Travel",
    imageSrc: "https://source.unsplash.com/400x300/?travel",
    quote: "Explore the world and make memories.",
  },
  {
    name: "Food",
    imageSrc: "https://source.unsplash.com/400x300/?food",
    quote: "Savor the flavors of life.",
  },
  {
    name: "Fashion",
    imageSrc: "https://source.unsplash.com/400x300/?fashion",
    quote: "Express yourself through style.",
  },
  {
    name: "Home Decor",
    imageSrc: "https://source.unsplash.com/400x300/?homedecor",
    quote: "Create a space that reflects you.",
  },
  {
    name: "Art",
    imageSrc: "https://source.unsplash.com/400x300/?art",
    quote: "Be inspired by the world of art.",
  },
  {
    name: "Technology",
    imageSrc: "https://source.unsplash.com/400x300/?technology",
    quote: "Innovate and shape the future.",
  },
  {
    name: "Sports",
    imageSrc: "https://source.unsplash.com/400x300/?sports",
    quote: "Push your limits and stay active.",
  },
  {
    name: "Pets",
    imageSrc: "https://source.unsplash.com/400x300/?pets",
    quote: "Love and cherish your furry friends.",
  },
  {
    name: "Fitness",
    imageSrc: "https://source.unsplash.com/400x300/?fitness",
    quote: "Train hard and stay healthy.",
  },
  {
    name: "Music",
    imageSrc: "https://source.unsplash.com/400x300/?music",
    quote: "Feel the rhythm of life.",
  },
  {
    name: "Books",
    imageSrc: "https://source.unsplash.com/400x300/?books",
    quote: "Explore new worlds through pages.",
  },
];

const cardStyle = {
  borderRadius: '20px',
  position: 'relative',
};

const imageTextStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '8px',
  color: 'white',
  background: 'none',
};

const Explore = () => {
    const router = useRouter()
  const attractiveQuote = "Discover the world's wonders with us.";

  return (
    <>
      <Typography variant="h3" gutterBottom align="center">
        Stay Inspired
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={4} key={index}>
            <Paper elevation={0} style={{ padding: '0' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  style={{ width: '100%', height: '320px', borderRadius: '35px' }}
                />
                <div style={imageTextStyle}>
                  <Typography variant="h6" gutterBottom align="center">
                    {category.name}
                  </Typography>
                  <Typography align="center">
                    {category.quote}
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom style={{marginTop:"10vh"}}>
          {attractiveQuote}
        </Typography>
        <Button
         onClick={()=> router.push('/user')}
          variant="outlined"
          style={{
            color: "black",
            backgroundColor: "#ebede5",
            border: "none",
            borderRadius: "25px",
            margin: '20px', // Adjust the margin to your liking
          }}
        >
          Go to Home feed
        </Button>
      </div>
    </>
  );
};

export default Explore;
