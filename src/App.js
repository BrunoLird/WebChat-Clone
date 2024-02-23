import React from 'react'
import Main from './components/Main'
import Signin from './pages/base/sign-in/Signin'
import { Route, Routes } from 'react-router-dom'
import Chat from './components/Chat'
import PhoneSignin from './components/PhoneSignin'
import {ROUTES} from "./services/constants"
import Box from "@mui/material/Box"

function App() {
  return (
    <Box>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Signin/>}/>
        <Route path={ROUTES.MAIN} element={<Main/>}/>
        <Route path={ROUTES.CHAT} element={<Chat/>}/>
        <Route path={ROUTES.PHONE} element={<PhoneSignin/>}/>
      </Routes>
    </Box>
  )
}

export default App
