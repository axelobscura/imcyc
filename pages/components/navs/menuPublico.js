import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'

export default function MenuPublico(){
  return(
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <Image
          src="/images/logo_extendido.svg"
          alt="INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C."
          width={150}
          height={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Buscar contenidos" />
          <Button variant="outline-success">BUSCAR POR TEMA</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}