'use client'
import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
};

const Card = () => {
  return (
    <Box>
      <ImageList variant="masonry" cols={6} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ ...commonStyles, borderRadius: '16px' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Card

const itemData = [
  {
    img: 'https://i.pinimg.com/474x/43/ec/2c/43ec2c88059435560a8b6531ef103552.jpg',
    title: 'Bed',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/9c/13/39/9c1339fd24b4f4db82a34f82d6f366ca.jpg',
    title: 'Books',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/0c/dc/2e/0cdc2ea047b1ef26ccfb518b1db26571.jpg',
    title: 'Sink',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/6b/a2/57/6ba257fc3c2dcf4b0cd30a05641b4fb2.jpg',
    title: 'Kitchen',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  
  {
    img: 'https://i.pinimg.com/474x/7e/57/57/7e575720bec4d5b2be8d984c1347b066.jpg',
    title: 'Kitchen',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/9c/85/4e/9c854eff95e5cb20ebb3ac427172d89c.jpg',
    title: 'Chairs',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/26/71/11/267111404b73394cdde9d39c61ebd1f0.jpg',
    title: 'Laptop',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/5c/44/e4/5c44e4d650014b92597b4e07040e7997.jpg',
    title: 'Bed',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/c4/36/59/c4365986a3691dbd743248478ad781c5.jpg',
    title: 'Kitchen',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    avatar:'https://i.pinimg.com/474x/00/2a/83/002a838bc6a06e7220c5334a66fa2045.jpg'
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    avatar:'https://i.pinimg.com/474x/4f/cc/f3/4fccf32540cb345c377e1936aaeda57d.jpg'
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    avatar:'https://i.pinimg.com/474x/f1/6f/15/f16f15145e469758fd0cbf4c206b38fb.jpg'
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
  {
    img: 'https://i.pinimg.com/474x/01/89/35/01893507acf740abf990853bb09a89b6.jpg',
    title: 'Coffee table',
    avatar:'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
  },
];
