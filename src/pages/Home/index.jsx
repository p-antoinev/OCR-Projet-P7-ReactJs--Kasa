//Style & Img
import './home.css'
import mainBanner from '../../assets/img/IMG.svg'
//Composant
import Banner from '../../components/Banner'
import HousingList from '../../components/HousingList'
// React Tools
import { useEffect } from 'react'


function Home() {
  useEffect(() => {
    document.title = 'Kasa'
  })
  return (
    <main>
      <section className='home-banner' >
        <Banner src={mainBanner} alt='paysage' text='Chez vous, partout et ailleurs' />
      </section>
      <HousingList/>
    </main>
  );
}

export default Home;
