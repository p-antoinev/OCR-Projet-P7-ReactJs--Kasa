//Data
import data from '../../data/Logement.json'
//Style & Img
import './housing.css'
//React Tools
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
//Composant
import HousingCarousel from '../../components/HousingCarousel'
import HousingTitle from '../../components/HousingTitle'
import HousingLocation from '../../components/HousingLocation'
import HousingTags from '../../components/HousingTags'
import ProfilName from '../../components/ProfilName'
import ProfilPicture from '../../components/ProfilPicture'
import Rating from '../../components/Rating'
import CollapseCard from '../../components/CollapseCard'



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
            <section className='housing-details'>
                <div className='housing-details--info'>
                   <HousingTitle title={logement.title}/>
                   <HousingLocation location={logement.location}/>
                   <HousingTags />
                </div>
                <div className='housing-details--profil'>
                    <div className='housing-profil'>
                        <ProfilName name={logement.host.name} />
                        <ProfilPicture src={logement.host.picture} alt={logement.host.name}  />
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </section>
            <section className='housing-collapse'>
                <div className='housing-collapse--container'>
                    <CollapseCard className={'Housing-card--text'}  title={"Description"} text={logement.description}/>
                </div>
                <div className='housing-collapse--container'>
                    <CollapseCard className={'Housing-card--text'} title={"Équipements"} text={
                        <div>{logement.equipments.map((item) =>
                                <p className='card-li' key={item}>{item}</p>
                            )}
                        </div>
                    } />
                </div>
                
            </section>
        </main>
    )
}

// Export to |-src|-index.jsx
export default Housing