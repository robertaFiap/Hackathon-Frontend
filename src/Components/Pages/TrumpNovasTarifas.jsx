import Image from 'react-bootstrap/Image';
import TrumpFoto from "../../assets/TrumpFoto.jpg";
import Logo from "../../assets/Logo.jpg";


function TrumpNovasTarifas(){
    return (
        <div class="a">
            <Image src={Logo} class="logo" width="400" height="75" />
            <h4 class="text-center">STJ marca data para julgar recurso que pode levar Robinho ao regime semiaberto.</h4>
            <p>Por que as novas tarifas de Trump são uma prova de fogo para Lula.</p>
            <p>Medidas ameaçam exportações brasileiras, colocam siderúrgicas em alerta e testam a capacidade do governo de negociar com os Estados Unidos</p>
            <p>Pode-se dizer muita coisa sobre o presidente dos Estados Unidos, Donald Trump, menos que ele tenha cometido um estelionato eleitoral, vencendo o pleito com promessas que nunca pretendeu cumprir. Empossado há menos de um mês, o republicano segue à risca o que defendeu na campanha para “fazer a América grande de novo”, como brecar a entrada de imigrantes ilegais e deportar os que já vivem no país.
            Era, portanto, uma questão de tempo para que decidisse corrigir o que considera injusto na relação comercial com outros países. Após anunciar, no início do mês, uma taxa de 25% sobre todas as importações do Canadá e do México — adiadas posteriormente por trinta dias —, 
            ele revogou, na segunda-feira 10, o regime de cotas de importação de produtos siderúrgicos. Em troca, instituiu uma tarifa de 25% sobre o aço e o alumínio que outras nações, Brasil incluído, vendem aos Estados Unidos. A medida, que entrará em vigor em 12 de março, pretende proteger a sucateada indústria siderúrgica local, cujos trabalhadores compõem uma fatia importante de seu eleitorado. 
            Trata-se de um setor que encolheu nos últimos vinte anos, enquanto a China se tornou a maior produtora mundial de aço. Não à toa, Trump deixou claro que seu alvo principal é a potência asiática. Para ele, exportadores como o Brasil e outros países seriam apenas 
            intermediários que estariam triangulando a venda de aço chinês ao mercado americano. É uma espécie de terraplanismo siderúrgico, mas, independentemente do que justificou a medida, a sombra do porrete tarifário já se projetou. </p>
            <div class="text-center">
                <Image src={TrumpFoto} class="imagemBet" width="600" height="300" />
            </div>
            <p><small><i>Fonte: https://veja.abril.com.br/economia/por-que-as-novas-tarifas-de-trump-sao-prova-de-fogo-para-lula</i></small></p>
            <footer id="contato" class="footer-section text-center bg-dark text-light">
            <div class="container">
                <p>&copy; 2025 Dev Foundations - Pós Tech-3CTJT - Turma 07. Todos os direitos reservados.</p>
            </div>
        </footer>
           
        </div>
    )
}

export default TrumpNovasTarifas
