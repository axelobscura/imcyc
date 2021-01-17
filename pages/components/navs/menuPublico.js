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
          <Nav.Link href="#home">QUIÉNES SOMOS</Nav.Link>
          <Nav.Link href="#link">CURSOS</Nav.Link>
          <Nav.Link href="#link">WEBINARS</Nav.Link>
          <Nav.Link href="#link">GERENCIA TÉCNICA</Nav.Link>
          <Nav.Link href="#link">HISTORIA</Nav.Link>
          <Nav.Link href="#link">MEMBRESÍAS</Nav.Link>
          <Nav.Link href="#link">DIRECTORIO</Nav.Link>
          <Nav.Link href="#link">TIENDA</Nav.Link>
          <Nav.Link href="#link">UBICACIÓN</Nav.Link>
          <Nav.Link href="#link">APLICACIONES</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="BUSCAR CONTENIDOS" />
          <Button><span className="lnr lnr-magnifier"></span></Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
