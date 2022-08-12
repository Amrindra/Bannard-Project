import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
            <LinkContainer to="/">
              <Nav.Link className="nav_item ">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products">
              <Nav.Link className="nav_item ">Products</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/services">
              <Nav.Link className="nav_item ">Services</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link className="nav_item ">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;