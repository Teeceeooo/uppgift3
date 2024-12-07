'use client'

import React from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    content: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '20px',
                    minWidth: '300px',
                    maxWidth: '500px',
                    zIndex: 1001
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{title}</h2>
                <p>{content}</p>
                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal
