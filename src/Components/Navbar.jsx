
import '../Components/styles/Navbar.css'
import BubuLogo from '/assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='main'>
      <Link to="/">
          <img src={BubuLogo} alt="Bubu Logo" />
        </Link>
        <div className='mainLink'>
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar