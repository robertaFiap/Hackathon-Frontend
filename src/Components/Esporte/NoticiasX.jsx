import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Bet365 from "../../assets/Bet365.jpg";
import Palmeiras from "../../assets/Palmeiras.jpg";
import Thiago from "../../assets/Thiago.jpg";
import Robinho from "../../assets/Robinho.jpg";
import Jejum from "../../assets/Jejum.jpg";

function NoticiasX() {
  return (
    <section class="esporte">
    <div id="card">
        <div class="container">
            <div class="row">
                <div class= "col-12">
                    <h4 class="text-center">Esporte</h4>
                </div>
                <div class="col-md-3" >
                    <div class="card" >
                        <Image src={Bet365} width="260" height="140"/>
                        <div class="card-body" >
                            <p class="card-text">A plataformas de apostas Bet365 Fora do Ar: Entenda as Possíveis Causas e Soluções</p>
                            <a href="BetForaAr"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3" >
                    <div class="card" >
                        <Image src={Palmeiras} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">Palmeiras: por que Abel trocou Estêvão e Facundo de posição; PVC explica.</p>
                            <a href="PalmeirasAbel"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3">
                    <div class="card" >
                        <Image src={Thiago} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">Thiago Monteiro vence 'batalha' contra argentino e avança no Rio Open.</p>
                            <a href="ThiagoMonteiroVence"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3">
                    <div class="card" >
                        <Image src={Robinho} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">STJ marca data para julgar recurso que pode levar Robinho ao regime semiaberto.</p>
                            <a href="RobinhoRegimeSemiAberto"><Button variant="primary">Veja +</Button></a>
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
                    <Image src={Jejum} width="1115" height="200" class="mural"/>
                </div>
            </div> 
        </div>
    </div> 
    </section>
 
  );
}

export default NoticiasX;

