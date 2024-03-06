import React, { useEffect, useReducer, useState } from "react"
import Navbar from "./Navbar"
import { useLocation } from "react-router-dom"
import { addDoc, collection, doc, getDocs } from "firebase/firestore"
import { auth, database } from "../firebase/setup"
import { IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Add from "../assets/icons/add.png"
import SendIcon from "@mui/icons-material/Send"
import background from "../assets/images/design.jpg"

function Chat({ chatInfo }) {

  const fileRef = useReducer(null)

  const [message, setMessage] = useState("")
  const [messageData, setMessageData] = useState([])
  const [file, setFile] = useState("")

  const location = useLocation()


  const addMessage = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.uid}`);
    const messageDoc = doc(userDoc, "Message", `${auth.currentUser?.uid}`);

    const messageId = chatInfo && chatInfo.id ? chatInfo.id : null;

    if (messageId) {
      const messageRef = collection(messageDoc, `Message-${messageId}`);
      try {
        await addDoc(messageRef, {
          message: message,
          file: file,
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("No se puede acceder a chatInfo.id porque chatInfo o chatInfo.id son nulos.");
    }
  };


  const sendMessage = async () => {
    const userDoc = doc(database, "Users", `${chatInfo.id}`);
    const messageDoc = doc(userDoc, "Message", `${chatInfo.id}`);
    const messageRef = collection(messageDoc, `Message-${auth.currentUser?.uid}`);
    try {
      await addDoc(messageRef, {
        message: message,
        file: file,
        name: auth.currentUser?.displayName,
      });
      addMessage();
      setFile("");
    } catch (err) {
      console.error(err);
    }
  };


  const showMessage = async () => {
    const userDoc = doc(database, "Users", `${auth.currentUser?.uid}`)
    const messageDoc = doc(userDoc, "Message", `${auth.currentUser?.uid}`)
    const messageRef = collection(messageDoc, `Message-${chatInfo.id}`)
    setTimeout(async () => {
      try {
        const data = await getDocs(messageRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setMessageData(filteredData)
      } catch (err) {
        console.error(err)
      }
    }, 1000)

  }


  useEffect(() => {
    showMessage()
  }, [messageData])


  return (
    <Box sx={styles.chat}>

      <Box sx={styles.chatTop}>
        <Navbar
          recieverUsername={chatInfo.username}
          recieverProImg={chatInfo.profile_image}
        />
      </Box>
      <Box sx={styles.chatMiddle}>
        {messageData.map((data) => {
          const isCurrentUser = data.name === auth.currentUser?.displayName

          return (
            <div key={data.id} style={{ textAlign: isCurrentUser ? "right" : "left" }}>
              <Typography style={{ fontWeight: "200" }}>{data.name}</Typography>
              <Paper sx={{ marginTop: "10px", width: "max-content" }}>
                <List>
                  <ListItem>
                    <ListItemText primary={data.message} />
                    {data.file !== "" && <img style={{ width: "200px" }} src={data.file} />}
                  </ListItem>
                </List>
              </Paper>
            </div>
          )
        })}
      </Box>
      <Box sx={styles.chatBottom}>
        <Box
          component={"img"}
          src={Add}
          width={"30px"}
          height={"30px"}
          bgcolor={"white"}
          onClick={() => fileRef.current.click()}
          borderRadius={"20%"}
          p={1}
          ml={1}
          sx={{ cursor: "pointer" }}
        />
        <input accept="image/*" onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} ref={fileRef}
               type="file" style={{ display: "none" }} />
        <input onChange={(e) => setMessage(e.target.value)} style={styles.chatText} placeholder="Type a message" />
        {file && <Paper>
          <img style={{ width: "70px", padding: "3px" }} src={file} />
        </Paper>}
        <IconButton
          onClick={sendMessage}
        >
          <SendIcon fontSize={"large"} color={"primary"} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Chat

const styles = {
  chat: {
    backgroundImage: ` url(${background})`,
    width: "150%",
    height: "100%",
  },
  chatTop: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  chatMiddle: {
    paddingTop: "90px",
    paddingLeft: "30px",
    minHeight: "100vh",
    height: "100%",
  },
  chatBottom: {
    position: "fixed",
    bottom: 0,
    width: "67%",
    backgroundColor: "#E9E9E9",
    height: "70px",
    display: "flex",
    alignItems: "center",
  },
  chatText: {
    width: "90%",
    height: "40px",
    marginLeft: "15px",
    borderRadius: "10px",
    border: `1px solid #E9E9E9`,
  },

}