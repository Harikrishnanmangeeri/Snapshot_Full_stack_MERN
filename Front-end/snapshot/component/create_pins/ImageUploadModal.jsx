import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Grid, Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ImageUploadModal = ({ isOpen, onClose, onImageUpload, uploadedImage }) => {
  const [selectedImage, setSelectedImage] = useState(uploadedImage);

  const handleImageUpload = (file) => {
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Upload Image</DialogTitle>
      <DialogContent>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              width: '70vh',
              height: '60vh',
              border: '2px dashed #ccc',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded Image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            ) : (
              <IconButton component="label" color="secondary">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageUpload(e.target.files[0])}
                />
                <AddPhotoAlternateIcon fontSize="large" style={{ color: 'grey' }} />
              </IconButton>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadModal;
