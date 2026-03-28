import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./client.js"
import ShowCreators from './pages/ShowCreators.jsx'
import NotFound from './pages/NotFound.jsx'
import EditCreator from './pages/EditCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
function App() {
  return(
  <>
    <Routes>
      <Route path="/" element={<ShowCreators/>}/>
      <Route path="/edit/:id" element={<EditCreator/>}/>
      <Route path="/add" element={<AddCreator/>}/>
      <Route path="/:id" element={<ViewCreator/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
  )
}

export default App
