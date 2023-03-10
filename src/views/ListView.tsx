import React from 'react'
import { Await, useLoaderData, useNavigate } from 'react-router-dom'
import { getPaginationURL } from '../helpers/pagination'
import { BreweryType, TypeOfBrewery } from '../loaders/BreweryLoader'
import { ToFirstUpperCase } from '../helpers/string'
import { $enum } from "ts-enum-util";
import BreweryList from '../controllers/BreweryList'

import '../style/ListPage.css'



const ListPage = () => {
    const { previous, next } = getPaginationURL(window.location.href)
    const navigate = useNavigate()
    const { promise, type } = useLoaderData() as any

    const OnSelectedTypeChanged = (event: any) => {
        const select = event.target as HTMLSelectElement
        const value = TypeOfBrewery[parseInt(select.value)]
        const newPath = `/explore/${value}`
        navigate(newPath)
    }



    return (
        <div data-testid="listPage" className='ListPage'>

            <label className='ListPage--filter'>
                TYPE = 
                <select name="brewery-type" onChange={OnSelectedTypeChanged} value={type}>
                    {$enum(TypeOfBrewery).map((key) => (
                        <option key={key} value={key}>
                            {ToFirstUpperCase(TypeOfBrewery[key])}
                        </option>
                    ))}
                </select>
            </label>

            <React.Suspense>
                <Await resolve={promise}>
                    {(breweries: BreweryType[]) => (
                        <>
                            <div className="ListPage--button">
                                <button className='ListPage--item' disabled={previous === undefined} onClick={() => { previous && navigate(previous.pathname + previous.search) }}>Previous</button>
                                <button className='ListPage--item' disabled={breweries.length !== 20} onClick={() => { navigate(next.pathname + next.search) }}>Next</button>
                            </div>

                            <ul className='ListPage--lis'>
                                {breweries.map((brewery) => (
                                    <BreweryList key={brewery.id} brewery={brewery} />
                                ))}
                            </ul>
                        </>
                    )}
                </Await>
            </React.Suspense>

        </div>
    )
}

export default ListPage