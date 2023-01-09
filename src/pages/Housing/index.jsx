//style
//Data
import data from '../../data/Logement.json'
//Composant
import HouseCarousel from '../../components/HouseCarousel'
//import HouseDetails from '../../components/HouseDetails'
//React Tools
import { useEffect, useParams } from 'react'

function Housing() {
    useEffect(() => {
        document.title = 'Logement'
    })
    const {uid} = useParams()
    const logement = getLogementId(data, uid)

    function getLogementId (data, uid) {
        for (let logement of data) {
            if (logement.id === uid) {
                return logement
            }
        }
    }


    return(
        <main>
            <HouseCarousel img={logement.pictures} />
        </main>
    )
}

// Export to |-src|-index.jsx
export default Housing