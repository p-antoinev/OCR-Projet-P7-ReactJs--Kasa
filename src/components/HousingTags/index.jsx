//Style
import './housingTags.css'
//Data
import data from '../../data/Logement.json'
//React tools
import { useParams } from 'react-router-dom'


function HousingTags({ tags }) {
    const {uid} = useParams()
    const logement = getLogementId(data, uid)
    
    function getLogementId (data, uid) {
        for (let logement of data) {
            if (logement.id === uid) {
                return logement
            }
        }
    };

    return (
        <div className='housin-tags--container'>
        {logement.tags.map((tag) => (
            <span key={tag} className='housing-tags--cards secondary-clr'>{tag}</span>
        ))}
        </div>
    )
}

// Export to |-src|-pages|-Housing
export default HousingTags