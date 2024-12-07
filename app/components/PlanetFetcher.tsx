'use client'

import React from 'react'
import { gql, useQuery } from '@apollo/client'
import client from '../lib/apolloClient'
import Card from './Card'

const GET_PLANETS = gql`
    query GetPlanets {
        allPlanets {
            planets {
                name
                climates
                terrains
                population
            }
        }
    }
`

const PlanetFetcher: React.FC = () => {
    const { loading, error, data } = useQuery(GET_PLANETS, { client })

    if (loading) return <p>Loading planets...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {data.allPlanets.planets.map(
                (planet: {
                    name: string
                    climates: string[]
                    terrains: string[]
                    population: string
                }) => (
                    <Card
                        key={planet.name}
                        title={planet.name}
                        subtitle={`Population: ${
                            planet.population || 'Unknown'
                        }`}
                        description={`Climates: ${planet.climates.join(
                            ', '
                        )} | Terrains: ${planet.terrains.join(', ')}`}
                    />
                )
            )}
        </div>
    )
}

export default PlanetFetcher
