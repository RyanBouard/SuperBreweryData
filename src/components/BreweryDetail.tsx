import React from 'react'
import { BreweryType, TypeOfBrewery } from '../loaders/BreweryLoader'
import './BreweryDetail.scss'


interface Props {
    brewery: BreweryType
}

const BreweryDetail = ({ brewery }: Props) => {
    return (
        <div className="BreweryDetail">
            <p className='BreweryDetail--type'>Type : {TypeOfBrewery[brewery.type]}</p>
            <h2 className='BreweryDetail--name'>Nom : {brewery.name}</h2>
            <p className='BreweryDetail--address'> Adresse : {brewery.street}, {brewery.city} {brewery.state} {brewery.postalCode}, {brewery.country}</p>
            <p className='BreweryDetail--phone'> Numéro de téléphone :  {brewery.phone}</p>
            {brewery.website &&
                <a className='BreweryDetail--website' href={brewery.website.href}>{brewery.website.hostname}</a>
            }
        </div>
    )
}

export default BreweryDetail