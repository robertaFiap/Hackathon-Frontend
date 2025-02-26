import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


class Anuncios extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            descricao: '',
            preco: '',
            contato: '',
            anuncio : [],
            modalAberto: false
        }
    }

    componentDidMount() {
        this.findAnuncio();
    }

    componentWillUnmount(){

    }

    findAnuncio = () => {
        fetch("http://localhost:3000/anuncios")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ anuncio: dados})
            })
    }

    deleteAnuncio = (id) => {
        alert('O anuncio será deletado!');
        fetch("http://localhost:3000/anuncios/"+id, {method: 'DELETE'})
            .then(resposta => {
                if(resposta.ok){
                    this.findAnuncio();
                }
            })
    }

    cadastrarAnuncio = (anuncio) => {
        fetch("http://localhost:3000/anuncios", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(anuncio)
        })
            .then(resposta => {
                if(resposta.ok){
                    this.findAnuncio();
                } else {
                    alert('Não foi possível adicionar o anuncio!');
                }
            })
    }

    carregaDados = (id) => {
        fetch("http://localhost:3000/anuncios/"+id, {method: 'GET'})
            .then(resposta => resposta.json())
            .then(anuncio =>{
                this.setState({
                    id: anuncio._id,
                    descricao: anuncio.descricao,
                    preco: anuncio.preco,
                    contato: anuncio.contato
                })
                this.abrirModal();
            })
    }

    atualizarAnuncio = (anuncio) => {
        fetch("http://localhost:3000/anuncios/"+anuncio.id, {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(anuncio)
        })
            .then(resposta => {
                if(resposta.ok){
                    this.findAnuncio();
                } else {
                    alert('Não foi possível atualizar o anuncio!');
                }
            })
    }

    
    renderTabela(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Descricao</th>
                        <th>Preco</th>
                        <th>Contato</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.anuncio.map((anuncio) =>
                            <tr>
                                <td>{anuncio.descricao}</td>
                                <td>{anuncio.preco}</td>
                                <td>{anuncio.contato}</td>
                                <td><Button variant="secondary ms-2 text-align-center" onClick={() => this.carregaDados(anuncio._id)}>Atualizar</Button>
                                    <Button variant="danger ms-2 text-align-center" onClick={() => this.deleteAnuncio(anuncio._id)}>Deletar</Button></td>
                            </tr>
                        )
                    } 
                    
                </tbody>
            </Table>
        )
    }


atualizaDescricao = (e) => {
    this.setState(
        {descricao: e.target.value}
    )

}  

atualizaPreco = (e) => {
    this.setState(
        {preco: e.target.value}
    )

}  

atualizaContato = (e) => {
    this.setState(
        {contato: e.target.value}
    )

}  

submit = () => {


    if (this.state.id == 0){
        const anuncio = {
            descricao: this.state.descricao,
            preco: this.state.preco,
            contato: this.state.contato,
        }
    
        this.cadastrarAnuncio(anuncio);
    } else {
        const anuncio = {
            id: this.state.id,
            descricao: this.state.descricao,
            preco: this.state.preco,
            contato: this.state.contato
        }
    
        this.atualizarAnuncio(anuncio);
    }
    this.fecharModal();
}

fecharModal = () => {
    this.setState(
        {
            modalAberto: false
        }
    )
}

abrirModal = () => {
    this.setState(
        {
            modalAberto: true
        }
    )
}

resetModal = () => {
    this.setState(
        {
            id: 0,
            descricao: '',
            preco: '',
            contato: ''
        }
    )
    this.abrirModal();
}

    render() {

        return (
            <div> 
                <Modal show={this.state.modalAberto} onHide={this.fecharModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar/Atualizar Anuncio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicDescricao">
                             <Form.Label>Descrição</Form.Label>
                             <Form.Control type="text" placeholder="Digite a Descrição" value={this.state.descricao} onChange={this.atualizaDescricao}/>
                        </Form.Group>
        
                        <Form.Group className="mb-3" controlId="formBasicPreco">
                           <Form.Label>Preço</Form.Label>
                           <Form.Control type="text" placeholder="Digite o Preço" value={this.state.preco} onChange={this.atualizaPreco}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicContato">
                           <Form.Label>Contato</Form.Label>
                          <Form.Control type="text" placeholder="Digite o Contato" value={this.state.contato} onChange={this.atualizaContato}/>
                        </Form.Group>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.fecharModal}>
                        Fechar
                    </Button>
                    <Button variant="primary" type="submit" onClick={this.submit}>
                        Salvar
                    </Button>
                </Modal.Footer>
                </Modal>
                
                <Button variant="outline-light my-3 btn-lg" type="submit" onClick={this.resetModal}>
                        Cadastrar Anuncio
                </Button>
                {this.renderTabela()};
            </div>

        );
    }
   
}

export default Anuncios