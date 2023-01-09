import React from 'react'
//style
//Data
import data from '../../data/Logement.json'
//Composant
import HouseCarousel from '../../components/HouseCarousel'
//import HouseDetails from '../../components/HouseDetails'
//React Tools
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
            <HouseCarousel img={logement.pictures} />
        </main>
    )
}

// Export to |-src|-index.jsx
export default Housing