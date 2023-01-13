//Data
import housingList from '../../data/Logement.json'
//Style & Img
import './housing.css'
//React Tools
import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
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
  })

  const { uid } = useParams()
  const currentHousing = getLogementId(uid)

  function getLogementId(uid) {
    return housingList.find((hsg) => hsg.id === uid)
  }

  return (
    <main>
      {currentHousing ? (
        <section>
          <HousingCarousel img={currentHousing.pictures} />
          <section className="housing-details">
            <div className="housing-details--info">
              <HousingTitle title={currentHousing.title} />
              <HousingLocation location={currentHousing.location} />
              <HousingTags />
            </div>
            <div className="housing-details--profil">
              <div className="housing-profil">
                <ProfilName name={currentHousing.host.name} />
                <ProfilPicture
                  src={currentHousing.host.picture}
                  alt={currentHousing.host.name}
                />
              </div>
              <Rating rating={currentHousing.rating} />
            </div>
          </section>
          <section className="housing-collapse">
            <div className="housing-collapse--container">
              <CollapseCard
                design={'Housing-card--text'}
                title={'Description'}
                text={currentHousing.description}
              />
            </div>
            <div className="housing-collapse--container">
              <CollapseCard
                design={'Housing-card--text'}
                title={'Équipements'}
                text={
                  <div>
                    {currentHousing.equipments.map((item) => (
                      <p className="card-li" key={item}>
                        {item}
                      </p>
                    ))}
                  </div>
                }
              />
            </div>
          </section>
        </section>
      ) : (
        <Navigate to="../pages/error" />
      )}
    </main>
  )
}

// Export to |-src|-index.jsx
export default Housing
