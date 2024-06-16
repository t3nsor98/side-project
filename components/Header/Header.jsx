import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="custom-brand">
          MILLION DOTS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="custom-nav-link">
              HOME
            </Nav.Link>
            <Nav.Link href="#who-we-are" className="custom-nav-link">
              WHO WE ARE
            </Nav.Link>
            <NavDropdown
              title="COURSES"
              id="basic-nav-dropdown"
              className="custom-nav-dropdown"
            >
              <NavDropdown.Item
                href="#extradin"
                className="custom-dropdown-item"
              >
                EXTRAIN
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#trading-entrepreneur"
                className="custom-dropdown-item"
              >
                TRADING ENTREPRENEUR
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#forex-trading"
                className="custom-dropdown-item"
              >
                FOREX TRADING
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog" className="custom-nav-link">
              BLOG
            </Nav.Link>
            <Nav.Link href="#contact-us" className="custom-nav-link">
              CONTACT US
            </Nav.Link>
          </Nav>
          <Button variant="success" href="#join-now" className="custom-button">
            JOIN NOW
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
