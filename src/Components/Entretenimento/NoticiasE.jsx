import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Filme from "../../assets/Filme.jpg";
import Fernanda from "../../assets/Fernanda.jpg";
import TheWhite from "../../assets/TheWhite.jpg";
import Velorio from "../../assets/Velorio.jpg";
import Mural from "../../assets/Mural.jpg";

function NoticiasE() {
  return (
    <section class="entretenimento">
    <div id="card">
        <div class="container">
            <div class="row">
                <div class= "col-12">
                    <h4 class="text-center">Entretenimento</h4>
                </div>
                <div class="col-md-3" >
                    <div class="card" >
                        <Image src={Filme} width="260" height="140"/>
                        <div class="card-body" >
                            <p class="card-text">Perda do BAFTA de Ainda Estou Aqui para 'Emilia Pérez' gera protestos na web.</p>
                            <a href="AindaEstouAqui"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3" >
                    <div class="card" >
                        <Image src={Fernanda} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">Fernanda Torres aparece chique em look de R$ 7.000 para a festa pré-Bafta.</p>
                            <a href="FernandaTorreLook"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3">
                    <div class="card" >
                        <Image src={TheWhite} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">'The White Lotus:' nem os atores querem receber spoilers da 3. temporada.</p>
                            <a href="TheWhiteLotus"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3">
                    <div class="card" >
                        <Image src={Velorio} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">Velório de Cacá Diegues: Famosos se despedem do cineasta.</p>
                            <a href="VelorioCacaDiegues"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
            </div>
        </div>
        
    </div>
    <div id="card">
        <div class="container">
            <div class="row">
                <div class= "col-12">
                    <p class="text-left"></p>
                    <Image src={Mural} width="1115" height="200" class="mural"/>
                                   
                </div>
            </div> 
        </div>
    </div> 
    </section>
 
  );
}

export default NoticiasE;

