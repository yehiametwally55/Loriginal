import { useEffect, useState } from 'react'
import './navbar.css'
import navbarLogo from  "../../assets/images/navbarLogo.png"
import { FaHome, FaRegClock, FaMapPin, FaSearchLocation, FaBars, FaTimes} from 'react-icons/fa'

function TopBar() {
  const [searchFocused, setSearchFocused] = useState(false);
  return (
    <div className="top-bar">
      <span className="top-bar-text">
        <FaRegClock style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        OPEN MONDAY TO SUNDAY FROM 11:00 A.M. TO 6 P.M.
      </span>
      <span className="top-bar-search-label" style={{ marginRight: '0.5rem', color: '#ebe9cf' }}>
        <FaMapPin style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
        163 Rue Saint-Paul O, Montréal, QC H2Y 1Z5
      </span>
      <div className="search-bar-desktop">
        <div className={`search-bar-wrapper${searchFocused ? ' expanded' : ''}`}>
          <FaSearchLocation className="search-icon" />
          <input
            className="top-bar-search"
            type="text"
            placeholder="Search"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
    </div>
  )
}
function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [searchFocused, setSearchFocused] = useState(false);
  const handleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  useEffect(() => {
  //   let lastScroll = window.scrollY;
  // let ticking = false;
  // let lastShow = window.scrollY;
    const onScroll = () => {
    if (window.scrollY === 0) {
      setShowTopBar(true);
    } else {
      setShowTopBar(false);
    }
  };
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className={`top-bar-wrapper${showTopBar ? '' : ' collapsed'}`}>
        <TopBar />
      </div>
      <nav className="navbar">
      <div className="navbar-logo">
        <img src={navbarLogo} alt="Logo" style={{ width: 120, height: 120 }} />
      </div>
      <button
        className="navbar-toggle"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
      <div className={`navbar-menu${menuOpen ? ' open' : ''}`}>
        {/* Show search bar only on mobile */}
          <div className="search-bar-mobile">
            <div className={`search-bar-wrapper${searchFocused ? ' expanded' : ''}`}>
              <FaSearchLocation className="search-icon" />
              <input
                className="top-bar-search"
                type="text"
                placeholder="Search"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>
        <ul className="navbar-links">
          <li>
            <a href="/Home"><FaHome size={24} title="Home" /></a>
          </li>

          <li className={`dropdown${openDropdown === 'join' ? ' open' : ''}`}>
            <a
              className="dropdown-toggle"
              onClick={() => handleDropdown('join')}
              type="button"
              aria-expanded={openDropdown === 'join'}
            >
              Join our Team
            </a>
            <ul className="dropdown-menu">
              <li><a href="/volunteer">Volunteer</a></li>
            </ul>
         </li>
          <li className={`dropdown${openDropdown === 'services' ? ' open' : ''}`}>
            <a
              className="dropdown-toggle"
              onClick={() => handleDropdown('services')}
              type="button"
              aria-expanded={openDropdown === 'services'}
            >
              Services 
            </a>
            <ul className="dropdown-menu">
              <li><a href="/TeamBuilding">Team building</a></li>
              <li><a href="https://web.archive.org/web/20250222110547/https://salle%C3%A0louer.ca/?fbclid=IwAR2iNeK82wtTbXLGK1QwmL_TkYPfvuwmGkH90n4aH1rA7qakav4CaD17wP4">Rent A Room</a></li>
            </ul>
          </li>
          <li><a href="/Visit">Visit</a></li>
          <li className={`dropdown${openDropdown === 'history' ? ' open' : ''}`}>
            <a
              className="dropdown-toggle"
              onClick={() => handleDropdown('history')}
              type="button"
              aria-expanded={openDropdown === 'history'}
            >
              History and Mission 
            </a>
            <ul className="dropdown-menu">
               <li><a href="/history">History</a></li>
              <li><a href="/artstudio">Art Studios</a></li>
              <li><a href="/sustainablefashion">Sust fashion</a></li>
            </ul>
          </li>
       </ul>
      </div>
    </nav>
    </>
  )
}
export default Navbar