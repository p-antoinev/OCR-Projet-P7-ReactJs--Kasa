//Image
import mainBanner from '../../assets/img/background_banner_main.png'
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
      <Banner src={mainBanner} alt='paysage' text='Chez vous, partout et ailleurs' />
      <HousingList/>
    </main>
  );
}

export default Home;
