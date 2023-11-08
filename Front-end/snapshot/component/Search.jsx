import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '50px',
  border: '2px solid #ccc', // Add border
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  '&:focus': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const DropdownWrapper = styled('div')({
  background: 'white',
  borderRadius: '5px',
  border: '2px solid #ccc', // Add border
});

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearchClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setAnchorEl(null);
  };

  return (
    <div>
      <SearchWrapper>
        <SearchIcon onClick={handleSearchClick} />
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </SearchWrapper>

      <Popper open={Boolean(anchorEl || selectedCategory)} anchorEl={anchorEl} placement="bottom-start">
        <DropdownWrapper>
          {selectedCategory ? (
            <div>
              <div>
                <Button onClick={() => handleCategoryClick(null)}>Back to Search</Button>
              </div>
              <div>
                <h2>Images for {selectedCategory}</h2>
              </div>
            </div>
          ) : (
            <div>
              <Button onClick={() => handleCategoryClick('Users')}>Search for Users</Button>
              <Button onClick={() => handleCategoryClick('Images')}>Search for Images</Button>
            </div>
          )}
        </DropdownWrapper>
      </Popper>
    </div>
  );
}
