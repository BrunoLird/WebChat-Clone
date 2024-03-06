import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import whatsapp from "../../../assets/images/whatsapp.png"
import { Button, Card, CardContent, Divider, Typography } from "@mui/material"
import google from "../../../assets/images/google.webp"
import { signInWithPopup } from "firebase/auth"
import { auth, database, googleProvider } from "../../../firebase/setup"
import { doc, setDoc } from "firebase/firestore"
import { Link, useNavigate } from "react-router-dom"
import colors from "../../../assets/theme/colors"
import { ROUTES } from "../../../services/constants"

export default function Signin() {

  const navigate = useNavigate()


  const addUser = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.uid}`)
    try {
      await setDoc(userDoc, {
        id: auth.currentUser?.uid,
        username: auth.currentUser?.displayName,
        profile_image: auth.currentUser?.photoURL,
      })
    } catch (err) {
      console.error(err)
    }
  }

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      addUser()
      navigate(ROUTES.MAIN)
    } catch (err) {
      console.error(err)
    }
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.navBar}>
        <Toolbar>
          <Box mt={"20px"} display={"flex"} alignItems={"center"}>
            <Box
              component={"img"}
              src={whatsapp}
              alt="whatsapp"
              width={"30px"}
              height={"30px"}
              marginLeft={"125px"}
            />
            <Typography fontSize={"18px"} fontWeight={"bold"} marginLeft={"20px"}>WEBCHAT WEB</Typography>
          </Box>
          <Card
            sx={styles.cardStyle}>
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <Box>
                <Typography sx={styles.loginText} fontWeight={"bold"}>Use WebChat on your devices</Typography>
                <Typography sx={styles.loginText}>1. Open WebChat on your browser</Typography>
                <Typography sx={styles.loginText}>2. Sign in using Google account</Typography>
                <Typography sx={styles.loginText}>3. Sign in using Phone number</Typography>
                <Box mt={7}>
                  <Button variant={"contained"} sx={styles.buttonStyle} onClick={() => navigate(ROUTES.PHONE)}>
                    Sign in with phone number
                  </Button>
                </Box>
              </Box>
              <Divider orientation={"vertical"} flexItem/>
              <Box onClick={googleSignIn} className="signin-btn">
                <Typography sx={styles.sigInText}>Sign in:</Typography>
                <Box
                  component={"img"}
                  src={google}
                  alt="whatsapp"
                  width={"150px"}
                  height={"150px"}
                  mt={3}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            </CardContent>
          </Card>
        </Toolbar>
      </AppBar>
    </Box>
  )
}


const styles = {
  navBar: {
    position: "static",
    height: "230px",
    backgroundColor: colors.primary.main,
  },
  cardStyle: {
    width: "50%",
    height: "400px",
    position: "absolute",
    top: 0,
    left: 0,
    background: "white",
    marginTop: "100px",
    marginLeft: "25%",
    padding: "40px",

  },
  loginText: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  buttonStyle: {
    backgroundColor: colors.primary.main,
  },
  sigInText: {
    textAlign: "center",
    color: colors.secondary.main,
  }
}