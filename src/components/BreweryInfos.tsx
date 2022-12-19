import React from 'react'
import { BreweryType, TypeOfBrewery } from '../loaders/BreweryLoader'
import '../style/BreweryInfos.css'


interface Props {
    brewery: BreweryType
}

const BreweryDetail = ({ brewery }: Props) => {
    return (
        //Affichage des infos
        <div className="BreweryDetail">
            <p className='BreweryDetail--type'>Type : {TypeOfBrewery[brewery.type]}</p>
            <h2 className='BreweryDetail--name'>Nom : {brewery.name}</h2>
            <p className='BreweryDetail--address'> Adresse : {brewery.street}, {brewery.city} {brewery.state} {brewery.postalCode}, {brewery.country}</p>
            {brewery.phone &&
                <p>Numéro de Téléphone : <a href={`tel:+1${brewery.phone}`} className='BreweryDetail--phone'>{brewery.phone}</a> </p>
            }
            {brewery.website &&
                <p>Site Internet : <a className='BreweryDetail--website' href={brewery.website.href}>{brewery.website.hostname}</a></p>
            }
        </div>
    )
}

export default BreweryDetail