//Données
import Data from '../../data/Logement.json'
//Style
import '../../styles/components/housinglist.css'
//Composants
import Card from '../Card'


function HousingList() {
    return(
        <div className='card--background'>
            {Data.map((item) => (
               <Card key={item.id} title={item.title} img={item.pictures[0]}   /> 
            ))}
        </div>
    )
}

// export to |-src|-pages|-Home
export default HousingList