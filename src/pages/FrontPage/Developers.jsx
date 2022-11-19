import React from 'react'
import Footer from '../../components/Footer'
import HeroSection from '../../components/FrontPage/Developers/HeroSection'
import InfoSection from '../../components/FrontPage/Developers/InfoSection'
import Sidebar from '../../components/FrontPage/FrontPage/Sidebar'
import SectionB from "../../components/FrontPage/FrontPage/SectionB"
import Navbar from '../../components/Navbar'
import InfoSectionB from '../../components/FrontPage/Developers/InfoSectionB'

const Developers = () => {
    return (
        <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Navbar/>
            <Sidebar/>
            <HeroSection />
            <InfoSection/>
            <InfoSectionB/>
            <SectionB/>
            <Footer/>
        </main>
    )
}

export default Developers