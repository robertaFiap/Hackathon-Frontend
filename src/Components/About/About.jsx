import Footer from '../../Components/About/Footer';
import Descriptions from '../../Components/About/Descriptions';
import Participants from '../../Components/About/Participants';


function About(){
    return (
        <div> 
            <Participants />
            <Descriptions />
            <Footer />
        </div>    
    )
}

export default About