import Politica from "../../assets/politica.png";
import Futebol from "../../assets/futebol1.jpg";
import Aviao from "../../assets/aviao1.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function GiraHome(){
    return (
        <Carousel fade>
            <Carousel.Item>
                <a href="TrumpNovasTarifas"><Image src={Politica} alt="First slide" text="First slide" class="d-none d-md-block"/></a>
                <Carousel.Caption>
                    <h3 class="text-primary" href="NoticiasE">Por que as novas tarifas de Trump são uma prova de fogo para Lula </h3>
                    <p class="text-primary">Medidas ameaçam exportações brasileiras, colocam siderúrgicas em alerta e testam a capacidade do governo de negociar com os Estados Unidos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="HulkMarcaGol"><Image src={Futebol} alt="Second slide" text="Second slide" class="d-none d-md-block0"/></a>
                <Carousel.Caption>
                    <h3 class="text-primary" >Hulk marca golaço pelo Atlético-MG e iguala Neymar como maior artilheiro brasileiro em atividade</h3>
                    <p class="text-primary">Atacante chega a 439 gols, somando jogos oficias por clubes e pela Seleção.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="AviaoCaiuSP"><Image src={Aviao} alt="third slide" text="Third slide" class="d-none d-md-block"/></a>
                <Carousel.Caption>
                    <h3 class="text-primary">SP: avião que caiu no interior já sofreu acidente em 2019</h3>
                    <p class="text-primary">Aeronave capotou ao tentar realizar um pouso forçado no interior do estado; duas pessoas morreram na colisão deste sábado (15).</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default GiraHome


