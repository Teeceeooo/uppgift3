'use client'

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilmFetcher from '../../components/FilmFetcher'

const Films: React.FC = () => {
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
            <h1>Star Wars Films</h1>
            <FilmFetcher />
            <Footer />
        </div>
    )
}

export default Films
