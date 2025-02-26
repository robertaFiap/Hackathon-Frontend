import Image from 'react-bootstrap/Image';
import HulkGol from "../../assets/HulkGol.jpg";
import Logo from "../../assets/Logo.jpg";

function HulkMarcaGol(){
    return (
        <div class="a"> 
            <Image src={Logo} class="imagemBet" width="400" height="75" />
            <h4 class="text-center">Hulk marca golaço pelo Atlético-MG e iguala Neymar como maior artilheiro brasileiro em atividade</h4>
            <div class="text-center">
                <Image src={HulkGol} class="imagemBet" width="600" height="300" />
            </div>
            <p>Atacante chega a 439 gols, somando jogos oficias por clubes e pela Seleção</p>
            <p>Hulk marcou duas vezes na vitória do <b>Atlético-MG</b> sobre o Tombense, na semifinal do Campeonato Mineiro, e igualou Neymar no posto de maior artilheiro brasileiro em atividade no futebol mundial, somando jogos oficiais por clubes e Seleção. Cada um deles tem 439 gols.</p>
            <p>Hulk iguala o camisa 10 do Santos em mais uma semana que demonstrou poder de decisão. Na quarta-feira, abriu o placar para a vitória por 3 a 0 sobre o Itabirito, que confirmou a classificação do Galo à semifinal do Mineiro.</p>
            <p>E a fase mata-mata já começou com a assinatura do super-herói atleticano. Primeiro, bateu pênalti com muita categoria, tirando as chances de Matheus defender, mesmo saltando para o canto da batida. E o segundo gol, minutos depois, nasceu de cobrança perfeita de falta. Mesmo de longe, bateu colocado, com a chapa do pé esquerdo, vendo a bola tocar o travessão antes de balançar as redes.</p>
            <p>Principal nome do Atlético desde que chegou, em 2021, Hulk começa mais uma temporada em alta, agora com sete gols em oito atuações. O atacante é o artilheiro do Campeonato Mineiro, agora com três gols a mais que Gabigol.</p>
            <p>Hulk é o maior artilheiro do Galo na história da Libertadores e do Brasileirão de pontos corridos, além de ser o principal artilheiro da Arena MRV e do Mineirão após a reforma para a Copa do Mundo de 2014.</p>
            <p><b>Maiores artilheiros do mundo na atualidade</b></p>
            <p>1. Cristiano Ronaldo: 925 gols</p>
            <p>2. Messi: 850 gols</p>
            <p>3. Lewandowski: 698 gols</p>
            <p>4. Suárez: 583 gols</p>
            <p>5. Benzema: 488 gols</p>
            <p>6. Cavani: 461 gols</p>
            <p>7. Dzeko: 444 gols</p>
            <p><b>8. Hulk e Neymar: 439 gols</b></p>
            <p>9. Kane: 437 gols</p>
            <p><small><i>Fonte: https://ge.globo.com/futebol/times/atletico-mg/noticia/2025/02/15/hulk-marca-golaco-pelo-atletico-mg-e-iguala-neymar-como-maior-artilheiro-brasileiro-em-atividade.ghtml</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
            <div class="container">
                <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
            </div>
        </footer>
           
        </div>
    )
}

export default HulkMarcaGol
