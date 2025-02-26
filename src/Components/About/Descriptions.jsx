import Image from 'react-bootstrap/Image';
import Marcio from "../../assets/Marcio.jpg";
import Luigi from "../../assets/Luigi.jpg";
import Roberta1 from "../../assets/Roberta1.jpg";



function Descriptions() {
    return (
        
        <div class="container">
        <div class="row">
                <div class= "col-12">
                    
                </div>
            <div class="col-md-4">
              <div class="card" >
                 <Image src={Marcio} width="100" height="100"/>
                 <div class="card-body">
                    <h5 class="text-primary">Marcio Eduardo - RM355738</h5>
                    <p class="card-text">Matemático e Administrador, mais de 30 anos de mercado, atuando como executivo de tecnologia no GitUn. Buscando acelerar a produtividade de desenvolvimento de software nas empresas da America Latina.</p>
                 </div>
              </div>   
            </div>
            <div class="col-md-4">
              <div class="card" >
                 <Image src={Luigi} width="100" height="100"/>
                 <div class="card-body">
                    <h5 class="text-primary">Luiz Fernando Lopez - RM353901</h5>
                    <p class="card-text">Engenheiro de Software com mais de 25 anos de experiência, trabalho no Banco Itaú com plataforma mainframe, busco aprendizado e conhecimento em plataforma distribuída.</p>
                 </div>
              </div>   
            </div>
            <div class="col-md-4">
              <div class="card" >
                 <Image src={Roberta1} width="100" height="100"/>
                 <div class="card-body">
                    <h5 class="text-primary">Roberta Anselmi - RM353292</h5>
                    <p class="card-text">Engenheira de Software com 20 anos de experiência na área, trabalha no Banco Itaú, sua formação é alta plataforma(Manfraime). Há cerca de 1 ano vem estudando e migrando para plataforma distribuída.</p>
                 </div>
              </div>   
            </div>
        </div>
        <h5 class="text-secondary">-----------------------------------------------------------------------------------------------------------------------------------------</h5>
        <h5 class="text-secondary">-----------------------------------------------------------------------------------------------------------------------------------------</h5>

        </div>
        
   
    )
}

export default Descriptions