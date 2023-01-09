//Data
import { charterList } from '../../data/charter.js'
//Style
import './charterList.css'
//Composant
import CollapseCard from '../CollapseCard'

function CharterList() {
    return(
        <div className='card--list'>
            {charterList.map((item) => (
                <CollapseCard key={item.id} title={item.title} text={item.content}/>
            ))}
        </div>
    )
    
}

// export to |-src|-pages|-About
export default CharterList