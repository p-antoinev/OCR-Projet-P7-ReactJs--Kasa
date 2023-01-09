//Data
import Data from '../../data/Logement.json'
//Style
import './housinglist.css'
//React Tools
import { Link } from 'react-router-dom'
//Composants
import Card from '../Card'



function HousingList() {
    return(
        <div className='card--background'>
                {Data.map((item) => (
                    <Link key={item.id} className='card--link' to={`/housing/${item.id}`}>
                        <Card  title={item.title} cover={item.cover}   /> 
                   </Link>
                ))}
        </div>
    )
}

// export to |-src|-pages|-Home
export default HousingList