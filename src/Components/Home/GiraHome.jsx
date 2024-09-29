import Livro4 from "../../assets/livros5.jpg";
import Livro1 from "../../assets/livros1.jpg";
import Livro2 from "../../assets/livros2.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


function GiraHome(){
    return (
        
        <Carousel fade>
            <Carousel.Item>
                <Image src={Livro4} alt="First slide" text="First slide" class="d-none d-md-block"/>
                <Carousel.Caption>
                    <h3 class="text-primary">Conhecimento</h3>
                    <p class="text-primary">A leitura é uma viagem fantástica ao mundo do conhecimento, onde só você "que ler", tem a oportunidade de transcender.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={Livro1} alt="Second slide" text="Second slide" class="d-none d-md-block0"/>
                <Carousel.Caption>
                    <h3 class="text-primary">Sabedoria</h3>
                    <p class="text-primary">A leitura é o passaporte para sabedoria.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={Livro2} alt="third slide" text="Third slide" class="d-none d-md-block"/>
                <Carousel.Caption>
                    <h3 class="text-primary">Significado</h3>
                    <p class="text-primary">É viver em outras peles, ver o mundo por outras perspectivas e compreender outros pontos de vista.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        
    );
        
    
}

export default GiraHome