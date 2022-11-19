import React from 'react'
import Footer from '../../components/Footer'
import HeroSection from '../../components/FrontPage/Business/HeroSection'
import InfoSection from '../../components/FrontPage/Business/InfoSection'
import SectionB from '../../components/FrontPage/Business/SectionB'
import Sidebar from '../../components/FrontPage/FrontPage/Sidebar'
import Navbar from '../../components/Navbar'

const Business = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Navbar/>
        <Sidebar/>
        <HeroSection/>
        <InfoSection/>
        <SectionB/>
        <Footer/>
    </main>
    
  )
}

export default Business