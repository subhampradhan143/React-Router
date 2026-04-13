import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Component/Header'
import MainRoute from './Component/MainRoute'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Subham</h1>
        <Header />
        <Navbar />
        <MainRoute />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
