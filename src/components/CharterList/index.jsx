//Data
import { charterList } from '../../data/charter.js'
//Style
import './charterList.css'
//Composant
import CollapseCard from '../CollapseCard'

function CharterList() {
    return(
            <div className='card-list'>
                {charterList.map((item) => (
                    <div className='card-list--container'>
                        <CollapseCard key={item.id} title={item.title} text={item.content}/>
                    </div>
                ))}
            </div>
    )
    
}

// export to |-src|-pages|-About
export default CharterList