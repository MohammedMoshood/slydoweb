import React from 'react'
import Footer from '../../components/Footer'
import Sidebar from '../../components/FrontPage/FrontPage/Sidebar'
import Navbar from '../../components/Navbar'

const Business = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Navbar/>
        <Sidebar/>
        <Footer/>
    </main>
    
  )
}

export default Business