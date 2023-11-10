'use client'
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Avatar, Grid } from '@mui/material';
import axios from 'axios';
import { getCookies } from 'cookies-next';

const cookie = getCookies('admin_token');
const UserListComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUserList() {
      try {
        const profiles = await axios.get('http://127.0.0.1:3001/api/admin/viewusers', {
          headers: {
            Authorization: `Bearer ${cookie.admin_token}`,
          },
        });
        setUsers(profiles.data.data); // Access profiles.data.data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user list:', error);
        setLoading(false);
      }
    }

    getUserList();
  }, []); 

  return (
    <Grid container spacing={2}>
      {loading ? (
        <Typography variant="body2" color="textSecondary">
          Loading...
        </Typography>
      ) : users?.length > 0 ? (
        users.map((user) => ( // Map over the array of users
          <Grid item key={user._id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Avatar alt={user.username} src={user.avatar} />
                <Typography variant="h6">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.bio}
                </Typography>
                <Button
                  variant="contained"
                  // color={user.isBlocked ? 'secondary' : 'primary'}
                  // onClick={() => onBlockUnblockClick(user._id, !user.isBlocked)}
                >
                  {/* {user.isBlocked ? 'Unblock' : 'Block'} */} drdr
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          No users found.
        </Typography>
      )}
    </Grid>
  );
};

export default UserListComponent;