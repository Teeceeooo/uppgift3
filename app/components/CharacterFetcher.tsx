'use client'

import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import client from '../lib/apolloClient'
import Card from './Card'
import SearchCharacter from './SearchCharacter'
import Button from './Button'
import Modal from './Modal'

const GET_CHARACTERS = gql`
    query GetCharacters {
        allPeople {
            people {
                name
                birthYear
                gender
            }
        }
    }
`

interface Character {
    name: string
    birthYear: string
    gender: string
}

const CharacterFetcher: React.FC = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, { client })
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [selectedCharacter, setSelectedCharacter] =
        useState<Character | null>(null)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const openModal = (character: Character) => {
        setSelectedCharacter(character)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedCharacter(null)
    }

    if (loading) return <p>Loading characters...</p>
    if (error) return <p>Error: {error.message}</p>

    const filteredCharacters: Character[] = data?.allPeople.people.filter(
        (person: Character) =>
            person.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <SearchCharacter onSearch={setSearchQuery} />
            <Button
                label="Reset Search"
                onClick={() => setSearchQuery('')}
                variant="secondary"
            />
            {filteredCharacters.length > 0 ? (
                filteredCharacters.map((person: Character) => (
                    <Card
                        key={person.name}
                        title={person.name}
                        subtitle={`Birth Year: ${person.birthYear}`}
                        description={`Gender: ${person.gender}`}
                        onClick={() => openModal(person)}
                    />
                ))
            ) : (
                <p>No characters found.</p>
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={selectedCharacter?.name || 'Character Details'}
                content={`Birth Year: ${selectedCharacter?.birthYear}\nGender: ${selectedCharacter?.gender}`}
            />
        </div>
    )
}

export default CharacterFetcher
