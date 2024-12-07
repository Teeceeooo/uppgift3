import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#333',
                color: '#fff',
                padding: '10px 20px',
                textAlign: 'center',
                zIndex: 1000,
                boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)'
            }}
        >
            <p style={{ margin: 0 }}>by Niklas Nohrs</p>
        </footer>
    )
}

export default Footer
