import Image from 'react-bootstrap/Image';
import EstouAqui from "../../assets/AindaEstouAqui.jpg";
import Logo from "../../assets/Logo.jpg";

function AindaEstouAqui(){
    return (
        <div class="b">
            <Image src={Logo} class="Logo" width="400" height="75" />
            <h4 class="text-center">Perda do BAFTA de Ainda Estou Aqui para 'Emilia Pérez' gera protestos na web.</h4>
            <div class="text-center">
                <Image src={EstouAqui} class="EstouAqui" width="600" height="300" />
            </div>
            <p>Cerimônia do ‘Oscar britânico’ aconteceu neste domingo (16) e trouxe o longa original Globoplay entre os indicados na categoria Melhor Filme de Língua Não-Inglesa</p>
            <p>Não foram só os brasileiros que ficaram frustrados por <b>Ainda Estou Aqui</b> não ter levado o BAFTA 2025 na categoria de Melhor Filme de Língua Não-Inglesa.</p>
            <p>O <b>longa de Walter Salles perdeu para "Emília Perez"</b>, que recebeu 11 indicação na premiação, que é considerada o Oscar britânico, e isso acabou gerando protestos na web de várias partes do mundo.</p>
            <p><b>"De verdade, nunca vou entender como Emilia Perez está ganhando todos esses prêmios", questionou uma internauta em português.</b></p>
            <p><b>"Isso me deixa louco. Emilia Pérez ganhou o BAFTA de Melhor Filme Internacional.</b></p>
            <p>Já outra internauta protestou mais duramente em língua inglesa.</p>
            <p><b>"Essa premiação é tão vergonhosa, desculpe, eles não sabem o que é um filme. F** o Bafta e Emilia Perez", escreveu.</b></p>
            <p><small><i>Fonte: https://gshow.globo.com/cultura-pop/filmes/noticia/perda-do-bafta-de-ainda-estou-aqui-para-emilia-perez-gera-protestos-na-web.ghtml</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
                <div class="container">
                    <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
                </div>
            </footer>
           
        </div>
    )
}

export default AindaEstouAqui
