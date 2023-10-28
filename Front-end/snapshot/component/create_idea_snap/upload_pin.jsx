'use client'
import React, { useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ImageUploadModal from './ImageUploadModal';



const Publish_idea_snap = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (file) => {
    if (file) {
      setUploadedImage(file);
      setModalOpen(false);
    }
  };

  const handlePost = () => {
    // Handle the post action here
  };

  const handleCancel = () => {
    setModalOpen(false);
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align='center'>
            Create idea snap
          </Typography>
          <Typography variant="body1" align='center'>
            Share your inspiration with the world!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setModalOpen(true)}
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            Upload Image
          </Button>
        </Grid>

        <Grid item xs={12}>
          {/* Attractive Quote */}
          <Typography variant="body1" gutterBottom align='center'>
            "Your inspiration is someone's future."
          </Typography>
        </Grid>

        <Grid item xs={12}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gridGap: '8px' }}>
  <img src="https://source.unsplash.com/150x150/?random=1" alt="Random Image 1" />
  <img src="https://source.unsplash.com/200x200/?random=2" alt="Random Image 2" />
  <img src="https://source.unsplash.com/180x250/?random=3" alt="Random Image 3" />
  <img src="https://source.unsplash.com/250x180/?random=4" alt="Random Image 4" />
  <img src="https://source.unsplash.com/170x170/?random=5" alt="Random Image 5" />
</div>

</Grid>

      </Grid>
      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onImageUpload={handleImageUpload}
        uploadedImage={uploadedImage}
        onPost={handlePost}
        onCancel={handleCancel}
      />
    </Container>
  );
};

export default Publish_idea_snap;
