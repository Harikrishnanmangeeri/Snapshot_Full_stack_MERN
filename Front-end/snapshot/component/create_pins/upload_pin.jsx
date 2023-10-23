'use client'
import React, { useState } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';

const CreatePinsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (file) => {
    if (file) {
      setUploadedImage(file);
      setModalOpen(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Create Pins
          </Typography>
          <Typography variant="body1">
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
          <Typography variant="body1" gutterBottom>
            "Your inspiration is someone's future."
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {/* Random Picture Collage (simplified) */}
          {/* This is just a placeholder */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://via.placeholder.com/150x150"
              alt="Random Image"
              style={{ margin: '4px' }}
            />
            <img
              src="https://via.placeholder.com/150x150"
              alt="Random Image"
              style={{ margin: '4px' }}
            />
            <img
              src="https://via.placeholder.com/150x150"
              alt="Random Image"
              style={{ margin: '4px' }}
            />
          </div>
        </Grid>
      </Grid>

      {/* Upload Image Modal */}
      <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Upload Image</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            style={{ display: 'none' }}
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              color="secondary"
              component="span"
              fullWidth
            >
              Choose File
            </Button>
          </label>
          {/* Display the uploaded image */}
          {uploadedImage && (
            <img
              src={URL.createObjectURL(uploadedImage)}
              alt="Uploaded Image"
              style={{ maxWidth: '100%', marginTop: '16px' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default CreatePinsPage;
