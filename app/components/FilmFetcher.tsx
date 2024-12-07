'use client'

import React from 'react'
import { gql, useQuery } from '@apollo/client'
import client from '../lib/apolloClient'
import Card from './Card'

const GET_FILMS = gql`
    query GetFilms {
        allFilms {
            films {
                title
                releaseDate
                director
                producers
            }
        }
    }
`

const FilmFetcher: React.FC = () => {
    const { loading, error, data } = useQuery(GET_FILMS, { client })

    if (loading) return <p>Loading films...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {data.allFilms.films.map(
                (film: {
                    title: string
                    releaseDate: string
                    director: string
                    producers: string[]
                }) => (
                    <Card
                        key={film.title}
                        title={film.title}
                        subtitle={`Director: ${film.director}`}
                        description={`Release Date: ${
                            film.releaseDate
                        } | Producers: ${film.producers.join(', ')}`}
                    />
                )
            )}
        </div>
    )
}

export default FilmFetcher
