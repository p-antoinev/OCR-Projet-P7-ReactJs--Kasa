//Style & Img
import './about.css'
import Banner from '../../components/Banner'
import aboutBanner from '../../assets/img/gustavo-alves-YOXSC4zRcxw-unsplash 1.svg'
import CharterList from '../../components/CharterList'
import { useEffect } from 'react'

function About() {
    useEffect(() => {
        document.title = 'À propos'
    })
    return (
        <main>
            <section className='about-banner' >
                <Banner src={aboutBanner} alt='paysage' text='' />
            </section>
            <CharterList />
        </main>
    )
}

// Export to |-src|-index.jsx
export default About