import Image from 'react-bootstrap/Image';
import Participantes from "../../assets/participants.jpg";

function Participants() {
    return (
        <section id="about" class="text-center text-light py-4">
        <div class="container">
            <h3>Este projeto tem a finalidade de estudo para integração entre Frontend e Backend</h3>
            <h5 class="mb-4">Dev Foundations - Pós Tech-3CTJT</h5>
            <h5 class="mb-5">Turma 07 - Participantes</h5>
            <Image src={Participantes} alt="Participantes" class="d-none d-md-block"/>
        </div>
    </section>
    )
}

export default Participants