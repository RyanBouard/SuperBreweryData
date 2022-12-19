import React from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import BreweryDetail from '../controllers/BreweryInfos'
import { BreweryType } from '../loaders/BreweryLoader'

const HomePage = () => {

    const { promise } = useLoaderData() as BreweryType

    return (
        <div data-testid="homePage">

            <Await resolve={promise}>
                {(randomBrewery: BreweryType) => (
                    <BreweryDetail brewery={randomBrewery} />
                 )}
            </Await>
        </div>
    )
}

export default HomePage