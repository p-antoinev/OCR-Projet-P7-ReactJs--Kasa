import Banner from '../../components/Banner'
import aboutBanner from '../../assets/img/about_banner.png'
import CharterList from '../../components/CharterList'
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        document.title = 'À propos'
    })
    return (
        <main>
            <Banner src={aboutBanner} alt='paysage' text='' />
            <CharterList />
        </main>
    )
}

// Export to |-src|-index.jsx
export default About