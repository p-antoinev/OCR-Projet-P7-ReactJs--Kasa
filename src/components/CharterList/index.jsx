//Data
import { charterList } from '../../data/charter.js'
//Style
import '../../styles/components/charterList.css'
//Composant
import CollapseCard from '../CollapseCard'

function CharterList() {
    return(
        <div className='card--list'>
            {charterList.map((item) => (
                <CollapseCard key={item.index} title={item.title} text={item.content}/>
            ))}
        </div>
    )
}

// export to |-src|-pages|-About
export default CharterList