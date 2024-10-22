import './styles/Navbar.css';
import BubuLogo from '/assets/logo.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img src={BubuLogo} alt="Bubu Logo"  />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Anasayfa</Link>
            <Link to="/menu" className="nav-link">Menü</Link>
            <Link to="/about" className="nav-link">Hakkımızda</Link>
            <Link to="/contact" className="nav-link">İletişim</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
