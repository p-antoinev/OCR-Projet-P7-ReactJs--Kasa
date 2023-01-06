import Banner from '../../components/Banner'
import HousingList from '../../components/HousingList'
import mainBanner from '../../assets/img/background_banner_main.png'




function Home() {
  return (
    <main>
      <Banner src={mainBanner} alt='paysage' text='Chez vous, partout et ailleurs' />
      <HousingList/>
    </main>
  );
}

export default Home;
