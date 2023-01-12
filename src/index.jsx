//React Tools
import React from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Composant
import Header from './components/Header'
import Footer from './components/Footer'
//Pages Composant
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Housing from './pages/Housing'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/housing/:uid" element={<Housing />} />

      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
