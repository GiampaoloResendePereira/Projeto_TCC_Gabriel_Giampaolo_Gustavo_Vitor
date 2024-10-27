import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function TelaMotoboy() {
  return (
    <div>
      <Navbar bg="danger" variant="dark"></Navbar>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="50" />
          </Link>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastrar-cliente">Cadastrar</Nav.Link>

            
          </Nav>
        </Container>
      </Navbar>

      
      
    </div>
  );
}

export default TelaMotoboy;