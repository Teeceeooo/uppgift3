'use client'

import React from 'react'

interface ButtonProps {
    label: string
    onClick: () => void
    variant?: 'primary' | 'secondary'
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    disabled = false
}) => {
    const styles = {
        base: {
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '4px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.6 : 1
        },
        primary: {
            backgroundColor: '#007BFF',
            color: '#fff'
        },
        secondary: {
            backgroundColor: '#6C757D',
            color: '#fff'
        }
    }

    const variantStyle = styles[variant]

    return (
        <button
            onClick={onClick}
            style={{ ...styles.base, ...variantStyle }}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button
