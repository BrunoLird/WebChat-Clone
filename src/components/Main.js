import { Grid, Typography } from "@mui/material"
import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import smartphone from "../assets/images/smartphone.png"
import colors from "../assets/theme/colors"
import Box from "@mui/material/Box"
import Chat from "./Chat"

function Main() {

  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelect = (chatInfo) => {
    setSelectedChat(chatInfo);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={4}>
          <Sidebar onChatSelect={handleChatSelect} />
        </Grid>
        <Grid item xs={7}>
          {selectedChat && <Chat chatInfo={selectedChat} />}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main


const styles = {
  rightComponent: {
    backgroundColor: "#E9E9E9",
    height: "100vh",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold"
  }
}