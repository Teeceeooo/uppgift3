'use client'

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PlanetFetcher from '../../components/PlanetFetcher'

const Planets: React.FC = () => {
    return (
        <div
            style={{
                paddingTop: '60px',
                paddingBottom: '40px',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center'
            }}
        >
            <Header />
            <h1>Star Wars Planets</h1>
            <PlanetFetcher />
            <Footer />
        </div>
    )
}

export default Planets
