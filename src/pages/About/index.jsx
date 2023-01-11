//Style & Img
import './about.css'
import Banner from '../../components/Banner'
import AboutBanner from '../../assets/img/aboutBanner.jpg'
import CharterList from '../../components/CharterList'
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        document.title = 'À propos'
    })
    return (
        <main>
            <section className='about-banner' >
                <Banner src={AboutBanner} alt='paysage' text='' />
            </section>
            <CharterList />
        </main>
    )
}

// Export to |-src|-index.jsx
export default About