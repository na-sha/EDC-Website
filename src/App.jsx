import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Events from './pages/Events'
import GalleryPage from './pages/GalleryPage'
import HomeEDC from './pages/HomeEDC'
import Contact from './components/Contact'
import Team from './pages/Team'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomeEDC />} />
      <Route path='/team' element={<Team />} />
      <Route path='/events' element={<Events />} />
      <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
