import Home from '../Components/Home/Home'
import Books from '../Components/Books/Books'
import About from '../Components/About/About'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function RoutesX() {
   

  return (
    <div className="Routes">
       
      <BrowserRouter>
        <Nav variant="underline" expand="lg" className="bg-light text-dark">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/Books">Biblioteca</Nav.Link>
          <Nav.Link as={Link} to="/About">Sobre</Nav.Link>
        </Nav>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/Books" element={<Books/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutesX
