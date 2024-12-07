'use client'

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import StatCard from './components/StatCard'

const Home: React.FC = () => {
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
            <main style={{ padding: '20px' }}>
                <h1>Welcome to the Star Wars Explorer</h1>
                <p
                    style={{
                        marginTop: '20px',
                        fontSize: '18px',
                        lineHeight: '1.6'
                    }}
                >
                    In this app you can learn more about the characters, films,
                    planets and you can even take a quiz to test your Star Wars
                    knowledge.
                </p>
                <ul
                    style={{
                        listStyleType: 'disc',
                        margin: '20px auto',
                        padding: '0',
                        maxWidth: '600px',
                        textAlign: 'left',
                        fontSize: '16px',
                        lineHeight: '1.8'
                    }}
                >
                    <li>
                        <strong>Characters:</strong> Learn about your favorite
                        characters & their background.
                    </li>
                    <li>
                        <strong>Films:</strong> Information about all the Star
                        Wars films, including release dates and directors.
                    </li>
                    <li>
                        <strong>Planets:</strong> Planets of the Star Wars
                        universe and their population.
                    </li>
                    <li>
                        <strong>Quiz:</strong> Test your Star Wars knowledge
                        with an interactive quiz!
                    </li>
                </ul>
                <p style={{ marginTop: '20px', fontSize: '16px' }}>
                    Use the navigation bar above to explore different sections
                    of the app. May the Force be with you!
                </p>
                <StatCard label="Characters" value={82} color="#28A745" />
                <StatCard label="Films" value={6} color="#FFC107" />
                <StatCard label="Planets" value={60} color="#17A2B8" />
            </main>
            <Footer />
        </div>
    )
}

export default Home
