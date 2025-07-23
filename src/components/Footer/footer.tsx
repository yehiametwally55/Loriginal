import './footer.css'
import navbarLogo from '../../assets/images/navbarLogo.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
<footer className="footer">
    <div className="footer-container">
      <div className="footer-col logo-col">
        <img src={navbarLogo} alt="Logo" className="footer-logo" />
        <address>
            163 Rue Saint-Paul O, Montréal, QC H2Y 1Z5<br />
            <a href="mailto:Dorian@loriginal.org" style={{ color: '#ebe9cf', textDecoration: 'none' }}>
            Dorian@loriginal.org</a><br />
            <a href="tel:+15149999611" style={{ color: '#ebe9cf', textDecoration: 'none' }}>
                +1 514-999-9611
            </a>
        </address>
      </div>
      <div className='footer-cols-right'>
      <div className="footer-col links-col">
        <h4>Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/artists">Artists</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-col info-col">
        <h4>Info</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
       <div className="footer-col socials-col">
        <h4>Socials</h4>
        <div className="footer-socials">
            <ul>
            <li><a href="https://www.facebook.com/loriginal.org/" aria-label="Facebook">
                <FaFacebook style={{ verticalAlign: 'middle', marginRight: 6 }} size={16} />
                Facebook
              </a></li>
            <li><a href="https://www.instagram.com/loriginal_org/?hl=en" aria-label="Instagram">
                <FaInstagram style={{ verticalAlign: 'middle', marginRight: 6 }} size={16} />
                Instagram
              </a></li>
            </ul>
        </div>
        </div>
      </div>
      </div>
      <div className='Copyright'>
        <div className="copyright-langs">
          <a href="#" aria-label="English"> English</a>
          <a href="#" aria-label="Chinese">中文</a>
          <a href="#" aria-label="French"> Français</a>
          <a href="#" aria-label="Arabic"> العربية</a>
          <a href="#" aria-label="Spanish"> Español</a>
        </div>
         <span className='Copyright-inner'>Loriginal © 2024. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  )
}