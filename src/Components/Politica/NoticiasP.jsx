import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Politica1 from "../../assets/Politica1.jpg";
import Politica2 from "../../assets/Politica2.jpg";
import Politica3 from "../../assets/Politica3.jpg";
import Politica4 from "../../assets/Politica4.jpg";
import Mural from "../../assets/Mural1.jpg";


function NoticiasP() {
  return (
    <section class="politica" >
    <div id="card">
        <div class="container">
            <div class="row">
                <div class= "col-12">
                    <h4 class="text-center">Política</h4>
                </div>
                <div class="col-md-3" >
                    <div class="card" >
                        <Image src={Politica1} width="260" height="140"/>
                        <div class="card-body" >
                            <p class="card-text">Semipresidencialismo é rejeitado por 71% dos brasileiros, mostra pesquisa.</p>
                            <a href="Semipresencidencialismo"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3" >
                    <div class="card" >
                        <Image src={Politica2} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">Brasil espera Trump tirar o bode da sala para negociar acordo comercial.</p>
                            <a href="BrasilAcordoComercial"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3">
                    <div class="card" >
                        <Image src={Politica3} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">Kassab reitera críticas a Haddad e diz que fragilidade é não impor projetos.</p>
                            <a href="KassabCriticaHaddad"><Button variant="primary">Veja +</Button></a>
                        </div>
                    </div>    
                 </div>
                 <div class="col-md-3">
                    <div class="card" >
                        <Image src={Politica4} width="260" height="140"/>
                        <div class="card-body">
                            <p class="card-text">Extrema direita finalmente se impõe como força opositora no Parlamento alemão.</p>
                            <a href="ExtremaDireita"><Button variant="primary">Veja +</Button></a>
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

export default NoticiasP;

