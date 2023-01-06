import logoFooter from '../../assets/img/LOGO_footer.svg'
import '../../styles/components/footer.css'

function Footer() {
    return(
        <footer>
            <img src={logoFooter} alt="logo kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer