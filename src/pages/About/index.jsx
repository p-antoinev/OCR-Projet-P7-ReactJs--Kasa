import Banner from '../../components/Banner'
import aboutBanner from '../../assets/img/about_banner.png'
import CharterList from '../../components/CharterList'

function About() {
    return (
        <main>
            <Banner src={aboutBanner} alt='paysage' text='' />
            <CharterList />
        </main>
    )
}

// export to |-src|-index.jsx
export default About