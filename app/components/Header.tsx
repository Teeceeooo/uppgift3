'use client'

import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#333',
                color: '#fff',
                padding: '10px 20px',
                textAlign: 'center',
                zIndex: 1000,
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'space-around'
            }}
        >
            <Link href="/">Home</Link>
            <Link href="/pages/characters">Characters</Link>
            <Link href="/pages/films">Films</Link>
            <Link href="/pages/planets">Planets</Link>
            <Link href="/pages/quiz">Quiz</Link>
        </header>
    )
}

export default Header
