import { Grid, Typography } from "@mui/material"
import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import smartphone from "../assets/images/smartphone.png"
import colors from "../assets/theme/colors"
import Box from "@mui/material/Box"

function Main() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={5}>
          <Sidebar />
        </Grid>
        <Grid item xs={7}>
          <Box sx={styles.rightComponent}>
            <Box
            component={"img"}
            src={smartphone}
            alt="smartphone"
            width={"200px"}
            height={"200px"}
            ml={"250px"}
            mt={"50px"}
            />
            <Typography sx={styles.text}>Whatschat web for desktop</Typography>
            <Typography sx={styles.text}>Keep your computer connected</Typography>
          </Box>
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