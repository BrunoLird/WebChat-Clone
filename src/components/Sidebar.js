import { Avatar, Card, Input, List, ListItem, ListItemText, Paper, TextField } from "@mui/material"
import { collection, getDocs } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { auth, database } from "../firebase/setup"
import lens from "../assets/images/lens.png"
import Box from "@mui/material/Box"


function Sidebar({onChatSelect}) {

  const [users, setUsers] = useState([])

  const getUser = async () => {
    const userRef = collection(database, "Users")
    try {
      const data = await getDocs(userRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setUsers(filteredData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [users])


  return (
    <Box>
      <Box sx={styles.search}>
        <Box
        component={"img"}
        src={lens}
        alt="lens"
        width={"23px"}
        ml={"25px"}
        mr={"10px"}
        />
        <TextField  size="small" fullWidth id="outlined-basic" label="Search" variant="outlined" />
      </Box>
      {users.filter(user => user.id !== auth.currentUser?.uid).map((user) => (
        <Card
          key={user.id}
          elevation={0}
          sx={{
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.8,
            },
            marginBottom:0.5
          }}
          onClick={() => onChatSelect({
            id: user.id,
            username: user.username,
            profile_image: user.profile_image
          })}
        >
          <List>
            <ListItem>
              <Avatar sx={{ marginLeft: "10px" }} src={user.profile_image} />
              <ListItemText sx={{ marginLeft: "10px" }} primary={user.username} />
            </ListItem>
          </List>
        </Card>
      ))}
    </Box>
  )
}

export default Sidebar

const styles = {
  search: {
    display: "flex",
    alignItems: "center",
    border: " 1px solid #D4D4D4",
    padding: "10px",
  },
}