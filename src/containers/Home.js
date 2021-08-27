import React from 'react'
import AppDownload from '../components/AppDownload'
import ContactUs from '../components/ContactUs'
import DiscoverFeatures from '../components/DiscoverFeatures'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="home">
            <header className="home_header_container">
                <Navbar />
                <Header />
               
            </header>
            <AppDownload />
                <DiscoverFeatures />
                <ContactUs />
                <Footer />
        </div>
    )
}

export default Home
