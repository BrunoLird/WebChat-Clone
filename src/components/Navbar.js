import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { auth } from "../firebase/setup"
import out from "../assets/images/out.png"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import colors from "../assets/theme/colors"
import google from "../assets/images/google.png"
import { IconButton, Typography } from "@mui/material"
import { ROUTES } from "../services/constants"
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar(props) {

  const navigate = useNavigate()

  const logout = async () => {
    try {
      await signOut(auth)
      navigate(ROUTES.ROOT)
    } catch (err) {
      console.error(err)
    }
  }

  console.log(auth.currentUser)


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.navBar}>
        <Toolbar variant="dense">
          <Box
            component={"img"}
            src={props.recieverProImg ?? auth.currentUser?.photoURL}
            alt="profile picture"
            width={"50px"}
            height={"50px"}
            borderRadius={"60%"}
          />
          <Typography ml={3}>{props.recieverUsername ?? "Hello"}</Typography>
          <IconButton aria-label="delete" size="large"  onClick={logout}>
            <LogoutIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}


const styles = {
  navBar: {
    position: "static",
    elevation: 0,
    height: "70px",
    backgroundColor: colors.primary.main,
  },
}