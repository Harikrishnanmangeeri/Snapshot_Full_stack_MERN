"use client";
// Import necessary components
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { getCookies } from "cookies-next";
import axiosInstance from "@/Redux/axios";
import { makeStyles } from "@mui/styles";

// Create a useStyles hook for custom styles
const useStyles = makeStyles((theme) => ({
  masonryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing(3), // Adjust the gap as needed
  },
}));

const AdminViewSnap = () => {
  const classes = useStyles(); // Use the custom styles
  const [reportedItems, setReportedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cookie = getCookies("admin_token");

  useEffect(() => {
    async function getReportedItems() {
      try {
        const response = await axiosInstance.get(
          `admin/viewSnap?page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${cookie.admin_token}`,
            },
          }
        );
        setReportedItems(response.data.data);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reported items:", error);
        setLoading(false);
      }
    }

    getReportedItems();
  }, [currentPage, cookie.admin_token]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box mt={3}>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="80vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div className={classes.masonryContainer}>
            {reportedItems.map((item) => (
              <Card key={item._id} elevation={3} style={{ maxWidth: "400px", width: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar
                      src={item.user_id.avatar}
                      alt={item.user_id.username}
                    />
                  }
                  title={item.user_id.username}
                  subheader={new Date(item.created_at).toLocaleDateString()}
                />
                <Divider />
                {item.url && (
                  <img
                    src={item.url}
                    alt="Reported Snapshot"
                    style={{
                      width: "100%",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    style={{ marginBottom: "16px" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={3}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              color="primary"
              onChange={handlePageChange}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default AdminViewSnap;
