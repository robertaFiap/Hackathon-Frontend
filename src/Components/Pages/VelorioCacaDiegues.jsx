import Image from 'react-bootstrap/Image';
import VelorioV2 from "../../assets/Velorio-V2.jpg";
import Logo from "../../assets/Logo.jpg";


function VelorioCacaDiegues(){
    return (
        <div class="a">
            <Image src={Logo} class="logo" width="400" height="75" />
            <h4 class="text-center">Velório de Cacá Diegues: famosos se despedem de cineasta.</h4>
            <div class="text-center">
                <Image src={VelorioV2} class="velorio"  />
            </div>
            <p>O velório do diretor Cacá Diegues acontece, neste sábado (15) na sede da Academia Brasileira de Letras, no RJ. Amigos e admiradores do cineasta, como Gilberto Gil, Pedro Bial, Gloria Pires e até o prefeito do Rio, Eduardo Paes, compareceram à cerimônia.</p>
            <p>Conhecido por filmes como "Xica da Silva" e "Deus é brasileiro", <b>Cacá Diegues morreu na sexta-feira (14) aos 84 anos, devido a complicações durante uma cirurgia.</b> O corpo do cineasta será cremado após o velório.</p>
            <p><small><i>Fonte: https://www.uol.com.br/splash/noticias/2025/02/15/velorio-de-caca-diegues-famosos-se-despedem-de-cineasta.htm</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
                <div class="container">
                    <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
                </div>
            </footer>
           
        </div>
    )
}

export default VelorioCacaDiegues
