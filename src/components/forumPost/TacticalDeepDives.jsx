import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";

const posts = [
  {
    id: 1,
    author: "Coach Smith",
    title: "4-3-3 High Press Implementation",
    description: "Here's how we successfully implemented a high press with our U16 team...",
    timeAgo: "2h ago",
    likes: 24,
    comments: 12,
    role: "Tactics Star",
    avatar: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    author: "Coach Johnson",
    title: "Transitioning from 4-4-2 to 3-5-2",
    description: "Looking for advice on helping players adapt to the new formation...",
    timeAgo: "4h ago",
    likes: 18,
    comments: 7,
    role: "Season MVP",
    avatar: "https://via.placeholder.com/40", 
  },
  
];

const TacticalDeepDives = () => {
  return (
    <Box sx={{ mx: "auto", height: "100%", display: "flex", flexDirection: "column" }}>
    {/* Fixed Header */}
    <Box sx={{ pb: 1 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Tactical Deep Dives
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#007bff" }}>+ New Post</Button>
      </Stack>
    </Box>
  
    {/* Scrollable Post List */}
    <Box
      sx={{
        flex: 1, // Take remaining space
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" }, 
        mt: 1, // Ensure it starts below the header
      }}
    >
      {posts.map((post) => (
        <Card key={post.id} variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar src={post.avatar} alt={post.author} />
              <Typography variant="h6">
                {post.author}
                <Typography component="span" sx={{ ml: 1 }} color="text.secondary">
                  {post.role}
                </Typography>
              </Typography>
            </Stack>
            <Typography variant="subtitle1" mt={1}>
              {post.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" mt={0.5}>
              {post.description}
            </Typography>
            <Stack direction="row" spacing={2} mt={2} alignItems="center">
              <Button startIcon={<ThumbUpIcon />} size="small" sx={{ textTransform: "none" }}>
                {post.likes} Likes
              </Button>
              <Button startIcon={<CommentIcon />} size="small" sx={{ textTransform: "none" }}>
                {post.comments} Comments
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
  
  );
};

export default TacticalDeepDives;
