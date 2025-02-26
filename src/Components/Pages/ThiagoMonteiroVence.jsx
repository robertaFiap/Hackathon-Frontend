import Image from 'react-bootstrap/Image';
import ThiagoVence from "../../assets/ThiagoVence.jpg";
import Logo from "../../assets/Logo.jpg";

function ThiagoMonteiroVence(){
    return (
        <div class="a">
            <Image src={Logo} class="logo" width="400" height="75" />
            <h4 class="text-center">Thiago Monteiro vence 'batalha' contra argentino e avança no Rio Open</h4>
            <div class="text-center">
                <Image src={ThiagoVence} class="thiago" width="600" height="300" />
            </div>
            <p>Nesta segunda-feira (17), pela primeira rodada do Rio Open, Thiago Monteiro duelou com o argentino Facundo Díaz Acosta, na Quadra Guga Kuerten, e venceu por 2 sets a 1, com parciais de 3/6, 6/3 e 7/6 (7-3).</p>
            <p>Com o resultado positivo, o brasileiro avançou de fase e, agora, aguarda o vencedor do confronto entre Chun Hsin Tseng e Alejandro Tabilo, que acontece nesta terça-feira, às 22h05 (de Brasília). Facundo Díaz se despede do torneio.</p>
            <p><b>Como foi o jogo</b></p>
            <p>No primeiro set, Facundo Díaz foi superior e superou o brasileiro por 6 a 3. Porém, Thiago Monteiro logo se recuperou e devolveu o placar que sofreu no primeiro set.</p>
            <p>No último set, o duelo foi para o tiebreak. Assim, Thago Monteiro se aproveitou do cansaço do adversário, que começou a sentir a perna, e venceu por 7/6 (7-3) e garantiu a vaga na próxima fase.</p>
            <p><small><i>https://www.uol.com.br/esporte/futebol/ultimas-noticias/gazeta-esportiva/2025/02/17/thiago-monteiro-vira-sobre-argentino-e-garante-vaga-na-proxima-fase-do-rio-open.htm</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
            <div class="container">
                <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
            </div>
        </footer>
           
        </div>
    )
}

export default ThiagoMonteiroVence
