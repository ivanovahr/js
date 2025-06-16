import React from "react"
import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "@/components/ui/toaster";
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components_app/Navbar"

function App() {

  return (
      <Box minH={"100vh"} bg='yellow.100'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
        <Toaster/>
      </Box>
  )
}

export default App
