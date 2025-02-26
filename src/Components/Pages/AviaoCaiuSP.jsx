import Image from 'react-bootstrap/Image';
import Aviao from "../../assets/Aviao.jpg";
import Logo from "../../assets/Logo.jpg";



function AviaoCaiuSP(){
    return (
        <div class="a" >
            <Image src={Logo} class="logo" width="400" height="75" />
            <h4 class="text-center">SP: avião que caiu no interior já sofreu acidente em 2019.</h4>
            <div class="text-center">
                <Image src={Aviao} class="aviao" width="600" height="300" />
            </div>    
            <p>Aeronave capotou ao tentar realizar um pouso forçado no interior do estado; duas pessoas morreram na colisão deste sábado (15).</p>
            <p>O mesmo avião que caiu na manhã deste sábado (15) na cidade de Quadra (SP) sofreu um acidente em 2019, quando a <b>aeronave capotou ao tentar realizar um pouso forçado, no interior do estado.</b></p>
            <p>Na época do primeiro acidente, de acordo com o relatório da aeronáutica que a CNN teve acesso, o avião realizou um pouso forçado em Piedade e acabou ficando de cabeça pra baixo, não houve vítimas.</p>
            <p>O avião pertencia a Nelson Ponzoni, que morreu <u>na colisão deste sábado, ao lado da esposa, Vivien Ponzoni.</u></p>
            <p>De acordo com o documento, a aeronave era um modelo experimental. No cadastro de registro da Agência Nacional da Aviação Civil (Anac), o modelo de pequeno porte não tinha licença para operação de táxi aéreo e foi registrado como construção amadora, fabricado em 1999.</p>
            <p>Segundo apuração do Centro de Investigação e Prevenção de Acidentes Aeronáuticos (Cenipa), o piloto Nelson Ponzoni, experiente e com licenças e habilitações válidas, decolou para um voo local.</p>
            <p>No entanto, condições meteorológicas desfavoráveis e a preocupação com o nível de combustível o levaram a optar por um pouso em um local não preparado e o avião capotou.</p>
            <p><b>Acidente fatal</b></p>
            <p>A aeronave caiu neste sábado (15), em um canavial localizado na Estrada Municipal Zulmira Coelho Miranda de Oliveira, no bairro de Guarapó. A Defesa Civil municipal informa que o avião acidentado era particular e decolou do Clube de Voo Aeroquadra, também na cidade de Quadra. A aeronave faria um sobrevoo pela região e pousaria no mesmo local.</p>
            <p>O acidente ocorreu na cidade de Quadra (SP), a cerca de 165 quilômetros da capital paulista.</p>
            <p><small><i>Fonte: https://www.cnnbrasil.com.br/nacional/sudeste/sp/sp-aviao-que-caiu-no-interior-ja-sofreu-acidente-em-2019/</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
            <div class="container">
                <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
            </div>
        </footer>
           
        </div>
    )
}

export default AviaoCaiuSP
