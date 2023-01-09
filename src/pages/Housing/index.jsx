//Data
import data from '../../data/Logement.json'
//style

//React Tools
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//Composant
import HousingCarousel from '../../components/HousingCarousel'
import HousingTitle from '../../components/HousingTitle'



function Housing() {
    useEffect(() => {
        document.title = 'Logement'
    });
    
    function getLogementId (data, uid) {
        for (let logement of data) {
            if (logement.id === uid) {
                return logement
            }
        }
    };

    const {uid} = useParams()
    const logement = getLogementId(data, uid)


    return(
        <main>
            <HousingCarousel img={logement.pictures} />
            <section>
                <div>
                   <HousingTitle title={logement.title}/> 
                </div>
            </section>
        </main>
    )
}

// Export to |-src|-index.jsx
export default Housing