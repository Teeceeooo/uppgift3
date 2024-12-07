'use client'

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CharacterFetcher from '../../components/CharacterFetcher'

const Characters: React.FC = () => {
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
            <h1>Star Wars Characters</h1>
            <CharacterFetcher />
            <Footer />
        </div>
    )
}

export default Characters
