import Image from 'react-bootstrap/Image';
import Ali from "../../assets/Ali.jpg";
import Logo from "../../assets/Logo.jpg";

function ExtremaDireita(){
    return (
        <div class="a">
            <Image src={Logo} class="logo" width="400" height="75" />
            <h4 class="text-center">Extrema direita finalmente se impõe como força opositora no Parlamento alemão.</h4>
            <div class="text-center">
                <Image src={Ali} class="Ali"  />
            </div>
            <p>Conservador moderado, Friedrich Merz tentará formar coalizão bipartidária com social-democratas, mas não terá trégua dos radicais do AfD.</p>
            <p>Não será fácil, constatou o conservador Friedrich Merz assim que as pesquisas de boca de urna o apontaram como vencedor das eleições na Alemanha. Desafios gigantescos esperam o futuro chanceler democrata-cristão nas missões de recuperar a economia estagnada do país, o seu papel de liderança na Europa e ainda fazer frente a uma nova ordem global, chacoalhada com a reestreia de Donald Trump na Casa Branca.</p>
            <p>Internamente, Merz terá na sua cola os radicais do Alternativa para a Alemanha, que cravaram o melhor resultado da extrema direita em nove décadas, com o dobro de votos em relação ao pleito de 2019. O AfD atuará como o maior grupo de oposição no Parlamento alemão e foi, mais uma vez, sumariamente descartado no domingo pelo líder eleito como integrante de sua futura coalizão.</p>
            <p><b>"Temos visões divergentes sobre política externa, política de segurança e Otan. Eles podem nos procurar o quanto quiserem, mas não cairemos em uma política errônea. Não vou questionar o legado de 75 anos da União Democrata Cristã apenas por uma autoproclamada Alternativa para a Alemanha. Vocês querem o oposto do que nós queremos", alertou.</b></p>
            <p>A melhor notícia chegou para Merz somente no fim da apuração. Com 28,6% dos votos, o bloco liderado por democratas cristãos pode agora se dar ao luxo de tentar formar um governo bipartidário apenas com os social-democratas do SPD —aliança que funcionou anteriormente em três dos quatro governos de Angela Merkel.</p>
            <p>Essa comunhão exclui a presença dos Verdes no governo e só será viável porque os liberais democratas (FDP) e a aliança de extrema esquerda BSW não conseguiram votos suficientes para entrar no Bundestag.</p>
            <p>A realidade da extrema direita, contudo, se impôs na Alemanha. <q>Calcado em posições anti-migração e pró-Rússia, o AfD não dará trégua ao governo.</q> A candidata Alice Wiedel avisou que o partido não pode ser ignorado e sugeriu que as próximas eleições podem vir antes do que o previsto. Em outras palavras, os radicais de direita estão prontos para tirar proveito de um suposto fracasso do novo governo.</p>
            <p><small><i>Fonte: https://g1.globo.com/mundo/blog/sandra-cohen/post/2025/02/24/extrema-direita-finalmente-se-impoe-como-forca-opositora-no-parlamento-alemao.ghtml</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
                <div class="container">
                    <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
                </div>
            </footer>
           
        </div>
    )
}

export default ExtremaDireita
