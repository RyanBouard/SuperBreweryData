import { Link } from "react-router-dom"
import { BreweryType } from "../loaders/BreweryLoader"
import '../style/BreweryList.css'

interface Props {
    brewery: BreweryType
}

const BreweryList = ({brewery}:Props) => {
    return (
        <li className="BreweryList" key={brewery.id}>
            <Link className="BreweryList--link" to={`/details/${brewery.id}`} >
                {brewery.name}
            </Link>
        </li>
    )
}

export default BreweryList