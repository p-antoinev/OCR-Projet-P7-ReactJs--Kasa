import Banner from '../../components/Banner'
import Card from '../../components/Card'
import mainBanner from '../../assets/img/background_banner_main.png'

function Home() {
  return (
    <main>
      <Banner src={mainBanner} alt='paysage' text='Chez vous, partout et ailleurs' />
      <Card />
    </main>
  );
}

export default Home;
