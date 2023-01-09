//Data
import data from '../../data/Logement.json'
//style
import './housing.css'
//React Tools
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//Composant
import HousingCarousel from '../../components/HousingCarousel'
import HousingTitle from '../../components/HousingTitle'
import HousingLocation from '../../components/HousingLocation'
import HousingTags from '../../components/HousingTags'



function Housing() {
    useEffect(() => {
        document.title = 'Logement'
    });

    const {uid} = useParams()
    const logement = getLogementId(data, uid)
    
    function getLogementId (data, uid) {
        for (let logement of data) {
            if (logement.id === uid) {
                return logement
            }
        }
    };
    
    return(
        <main>
            <HousingCarousel img={logement.pictures} />
            <section>
                <div className='housing-details'>
                   <HousingTitle title={logement.title}/>
                   <HousingLocation location={logement.location}/>
                   <HousingTags />
                </div> 
            </section>
        </main>
    )
}

// Export to |-src|-index.jsx
export default Housing