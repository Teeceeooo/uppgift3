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

const CharacterFetcher: React.FC = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, { client })
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCharacter, setSelectedCharacter] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (character: any) => {
        setSelectedCharacter(character)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedCharacter(null)
    }

    if (loading) return <p>Loading characters...</p>
    if (error) return <p>Error: {error.message}</p>

    const filteredCharacters = data.allPeople.people.filter(
        (person: { name: string }) =>
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
                filteredCharacters.map(
                    (person: {
                        name: string
                        birthYear: string
                        gender: string
                    }) => (
                        <Card
                            key={person.name}
                            title={person.name}
                            subtitle={`Birth Year: ${person.birthYear}`}
                            description={`Gender: ${person.gender}`}
                            onClick={() => openModal(person)}
                        />
                    )
                )
            ) : (
                <p>No characters found.</p>
            )}

            {}
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
