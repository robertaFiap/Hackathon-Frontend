import Home from '../Components/Home/Home'
import Esporte from '../Components/Esporte/Esporte'
import Anuncios from '../Components/Anuncios/Anuncios.jsx'
import About from '../Components/About/About'
import Entretenimento from '../Components/Entretenimento/Entretenimento'
import Politica from '../Components/Politica/Politica'
import Teste from '../Components/Paginas/Teste.jsx'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function RoutesX() {
   

  return (
    <div className="Routes">
       
      <BrowserRouter>
        <Nav variant="underline" expand="lg" className="bg-light text-dark">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/Entretenimento">Entretenimento</Nav.Link>
          <Nav.Link as={Link} to="/Política">Política</Nav.Link>
          <Nav.Link as={Link} to="/Esporte">Esporte</Nav.Link>
          <Nav.Link as={Link} to="/Anuncios">Mural de Anúncios</Nav.Link>
          <Nav.Link as={Link} to="/About">Sobre</Nav.Link>
          
        </Nav>
        <Routes>
          <Route path="/" index element={<Home/>}></Route>
          <Route path="/Entretenimento" element={<Entretenimento/>}></Route>
          <Route path="/Política" element={<Politica/>}></Route>
          <Route path="/Esporte" element={<Esporte/>}></Route>
          <Route path="/Anuncios" element={<Anuncios/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutesX
