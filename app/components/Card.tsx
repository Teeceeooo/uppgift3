'use client'

import React from 'react'

interface CardProps {
    title: string
    subtitle?: string
    description?: string
    onClick?: () => void
}

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    description,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                margin: '10px auto',
                maxWidth: '400px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                cursor: onClick ? 'pointer' : 'default'
            }}
        >
            <h2 style={{ margin: '0 0 10px', fontSize: '20px', color: '#333' }}>
                {title}
            </h2>
            {subtitle && (
                <h3
                    style={{
                        margin: '0 0 10px',
                        fontSize: '16px',
                        color: '#555'
                    }}
                >
                    {subtitle}
                </h3>
            )}
            {description && (
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                    {description}
                </p>
            )}
        </div>
    )
}

export default Card
