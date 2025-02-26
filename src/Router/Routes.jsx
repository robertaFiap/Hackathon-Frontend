import Home from '../Components/Home/Home'
import Esporte from '../Components/Esporte/Esporte'
import Anuncios from '../Components/Anuncios/Anuncios.jsx'
import About from '../Components/About/About'
import Entretenimento from '../Components/Entretenimento/Entretenimento'
import Politica from '../Components/Politica/Politica'
import BetForaAr from '../Components/Pages/BetForaAr.jsx'
import PalmeirasAbel from '../Components/Pages/PalmeirasAbel.jsx'
import ThiagoMonteiroVence from '../Components/Pages/ThiagoMonteiroVence.jsx'
import RobinhoRegimeSemiAberto from '../Components/Pages/RobinhoRegimeSemiAberto.jsx'
import TrumpNovasTarifas from '../Components/Pages/TrumpNovasTarifas.jsx'
import HulkMarcaGol from '../Components/Pages/HulkMarcaGol.jsx'
import AviaoCaiuSP from '../Components/Pages/AviaoCaiuSP.jsx'
import Semipresencidencialismo from '../Components/Pages/Semipresencidencialismo.jsx'
import BrasilAcordoComercial from '../Components/Pages/BrasilAcordoComercial.jsx'
import KassabCriticaHaddad from '../Components/Pages/KassabCriticaHaddad.jsx'
import ExtremaDireita from '../Components/Pages/ExtremaDireita.jsx'
import AindaEstouAqui from '../Components/Pages/AindaEstouAqui.jsx'
import FernandaTorreLook from '../Components/Pages/FernandaTorreLook.jsx'
import TheWhiteLotus from '../Components/Pages/TheWhiteLotus.jsx'
import VelorioCacaDiegues from '../Components/Pages/VelorioCacaDiegues.jsx'
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
          <Route path="/BetForaAr" element={<BetForaAr/>}></Route>
          <Route path="/PalmeirasAbel" element={<PalmeirasAbel/>}></Route>
          <Route path="/ThiagoMonteiroVence" element={<ThiagoMonteiroVence/>}></Route>
          <Route path="/RobinhoRegimeSemiAberto" element={<RobinhoRegimeSemiAberto/>}></Route>
          <Route path="/TrumpNovasTarifas" element={<TrumpNovasTarifas/>}></Route>
          <Route path="/HulkMarcaGol" element={<HulkMarcaGol/>}></Route>
          <Route path="/AviaoCaiuSP" element={<AviaoCaiuSP/>}></Route>
          <Route path="/Semipresencidencialismo" element={<Semipresencidencialismo/>}></Route>
          <Route path="/BrasilAcordoComercial" element={<BrasilAcordoComercial/>}></Route>
          <Route path="/ExtremaDireita" element={<ExtremaDireita/>}></Route>
          <Route path="/KassabCriticaHaddad" element={<KassabCriticaHaddad/>}></Route>
          <Route path="/AindaEstouAqui" element={<AindaEstouAqui/>}></Route>
          <Route path="/FernandaTorreLook" element={<FernandaTorreLook/>}></Route>
          <Route path="/TheWhiteLotus" element={<TheWhiteLotus/>}></Route>
          <Route path="/VelorioCacaDiegues" element={<VelorioCacaDiegues/>}></Route>
          
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutesX
