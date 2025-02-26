import Image from 'react-bootstrap/Image';
import Fernanda from "../../assets/Fernanda.jpg";
import Logo from "../../assets/Logo.jpg";


function FernandaTorreLook(){
    return (
        <div class="a">
            <Image src={Logo} class="logo" width="400" height="75" />
            <h4 class="text-center">Fernanda Torres aparece chique em look de R$ 7.000 para festa pré-Bafta.</h4>
            <div class="text-center" >
                <Image src={Fernanda} class="fernanda" width="600" height="300" />
            </div>
            <p>Fernanda Torres usou o Instagram para mostrar o look chique usará na festa da Chanel pré-Bafta, que acontece neste sábado (15).</p>
            <p><b>O que aconteceu</b></p>
            <p>A brasileira apostou em uma saia longa preta e um cardigã de lã da Tory Burch, avaliado em R$ 7 mil.</p>
            <p>A atriz compartilhou detalhes da roupa que escolheu para o evento desta noite. A cerimônia do Bafta acontece neste domingo (16), a partir das 16h, em Londres.</p>
            <p>Indicada ao Oscar como melhor atriz, Torres publicou uma foto no espelho. "A caminho da festa da Chanel pré Bafta - Londres", escreveu na legenda.</p>
            <p><b>Bafta 2025</b></p>
            <p><q>O Bafta 2025 acontece neste domingo (16) e, considerado o Oscar britânico</q>, pode ampliar o reconhecimento internacional de "Ainda Estou Aqui", indicado a melhor filme em língua não inglesa —Fernanda Torres não foi indicada ao prêmio de melhor atriz.</p>
            <p>No entanto, especialistas avaliam que as chances de o Brasil levar o prêmio são baixas, especialmente diante do favoritismo de "Emilia Pérez" e "Tudo Que Imaginamos Como Luz".</p>
            <p><small><i>Fonte: https://www.uol.com.br/splash/noticias/2025/02/15/fernanda-torres-aparece-chique-em-look-de-r-7-mil-para-festa-pre-bafta.htm</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
                <div class="container">
                    <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
                </div>
            </footer>
           
        </div>
    )
}

export default FernandaTorreLook