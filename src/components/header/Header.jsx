import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      collapseOnSelect
      className="p-4"
    >
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav mr-auto">
          <Nav className="justify-content-end nav ">
            <Nav.Link href="#home" className="nav_item ">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="nav_item">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav_item">
              Products
            </Nav.Link>
            <Nav.Link href="#contact" className="nav_item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
