import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import "./client.js"
function App() {
  return(
  <>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </>
  )
}

export default App
