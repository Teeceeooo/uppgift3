import React, { useState } from 'react'

interface SearchCharacterProps {
    onSearch: (query: string) => void
}

const SearchCharacter: React.FC<SearchCharacterProps> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        onSearch(e.target.value)
    }

    return (
        <div style={{ margin: '20px 0' }}>
            <input
                type="text"
                placeholder="Search for a character"
                value={searchValue}
                onChange={handleInputChange}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '400px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />
        </div>
    )
}

export default SearchCharacter
