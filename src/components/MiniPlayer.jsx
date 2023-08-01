import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Draggable from "react-draggable";

const MiniPlayer = ({ videoDetail }) => {
  const { id, snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  const [showMiniPlayer, setShowMiniPlayer] = useState(false);

  const miniPlayerStyle = {
    position: showMiniPlayer ? "fixed" : "relative",
    bottom: showMiniPlayer ? "20px" : 0,
    right: showMiniPlayer ? "20px" : 0,
    width: showMiniPlayer ? "300px" : "100%", // Adjust the width as per your requirements
    height: showMiniPlayer ? "180px" : "auto", // Adjust the height as per your requirements
    boxShadow: showMiniPlayer ? "0 2px 5px rgba(0, 0, 0, 0.2)" : "none",
    borderRadius: showMiniPlayer ? "8px" : 0,
    backgroundColor: showMiniPlayer ? "#fff" : "transparent",
    zIndex: showMiniPlayer ? 9999 : "auto",
    overflow: showMiniPlayer ? "visible" : "hidden",
  };

  const handleSymbolClick = () => {
    setShowMiniPlayer(!showMiniPlayer);
  };

  return (
    <>
      {!showMiniPlayer && (
        <Box
          position="absolute"
          top="10px"
          left="10px"
          width="24px"
          height="24px"
          cursor="pointer"
          onClick={handleSymbolClick}
          zIndex="9999"
        >
          ▶️ {/* Replace this with the chosen symbol or emoji */}
        </Box>
      )}
      <Draggable disabled={!showMiniPlayer}>
        <Box style={miniPlayerStyle}>
          {showMiniPlayer && (
            <>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls width="100%" height="100%" />
              <Typography variant="h6" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{ color: "#000" }} py={1} px={2}>
                <Typography variant="subtitle1" color="#000">
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </>
          )}
        </Box>
      </Draggable>
    </>
  );
};

export default MiniPlayer;
