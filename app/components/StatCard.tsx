'use client'

import React from 'react'

interface StatCardProps {
    label: string
    value: number | string
    color?: string
}

const StatCard: React.FC<StatCardProps> = ({
    label,
    value,
    color = '#007BFF'
}) => {
    return (
        <div
            style={{
                border: `2px solid ${color}`,
                borderRadius: '8px',
                padding: '20px',
                margin: '10px auto',
                maxWidth: '300px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff'
            }}
        >
            <h2 style={{ margin: '0 0 10px', fontSize: '24px', color }}>
                {value}
            </h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#333' }}>
                {label}
            </p>
        </div>
    )
}

export default StatCard
