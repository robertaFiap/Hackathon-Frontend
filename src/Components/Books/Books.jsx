import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: '',
            autor: '',
            editora: '',
            book : [],
            modalAberto: false
        }
    }

    componentDidMount() {
        this.findBook();
    }

    componentWillUnmount(){

    }

    findBook = () => {
        fetch("http://localhost:3000/livros")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ book: dados})
            })
    }

    deleteBook = (id) => {
        alert('O livro será deletado!');
        fetch("http://localhost:3000/livros/"+id, {method: 'DELETE'})
            .then(resposta => {
                if(resposta.ok){
                    this.findBook();
                }
            })
    }

    cadastrarBook = (book) => {
        fetch("http://localhost:3000/livros", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(book)
        })
            .then(resposta => {
                if(resposta.ok){
                    this.findBook();
                } else {
                    alert('Não foi possível adicionar o livro!');
                }
            })
    }

    carregaDados = (id) => {
        fetch("http://localhost:3000/livros/"+id, {method: 'GET'})
            .then(resposta => resposta.json())
            .then(book =>{
                this.setState({
                    id: book._id,
                    titulo: book.titulo,
                    autor: book.autor,
                    editora: book.editora
                })
                this.abrirModal();
            })
    }

    atualizarBook = (book) => {
        fetch("http://localhost:3000/livros/"+book.id, {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(book)
        })
            .then(resposta => {
                if(resposta.ok){
                    this.findBook();
                } else {
                    alert('Não foi possível atualizar o livro!');
                }
            })
    }

    
    renderTabela(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Editora</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.book.map((book) =>
                            <tr>
                                <td>{book.titulo}</td>
                                <td>{book.autor}</td>
                                <td>{book.editora}</td>
                                <td><Button variant="secondary ms-2 text-align-center" onClick={() => this.carregaDados(book._id)}>Atualizar</Button>
                                    <Button variant="danger ms-2 text-align-center" onClick={() => this.deleteBook(book._id)}>Deletar</Button></td>
                            </tr>
                        )
                    } 
                    
                </tbody>
            </Table>
        )
    }


atualizaTitulo = (e) => {
    this.setState(
        {titulo: e.target.value}
    )

}  

atualizaAutor = (e) => {
    this.setState(
        {autor: e.target.value}
    )

}  

atualizaEditora = (e) => {
    this.setState(
        {editora: e.target.value}
    )

}  

submit = () => {


    if (this.state.id == 0){
        const book = {
            titulo: this.state.titulo,
            autor: this.state.autor,
            editora: this.state.editora,
        }
    
        this.cadastrarBook(book);
    } else {
        const book = {
            id: this.state.id,
            titulo: this.state.titulo,
            autor: this.state.autor,
            editora: this.state.editora
        }
    
        this.atualizarBook(book);
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
            titulo: '',
            autor: '',
            editora: ''
        }
    )
    this.abrirModal();
}

    render() {

        return (
            <div> 
                <Modal show={this.state.modalAberto} onHide={this.fecharModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar/Atualizar Livro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitulo">
                             <Form.Label>Titulo</Form.Label>
                             <Form.Control type="text" placeholder="Digite o Titulo" value={this.state.titulo} onChange={this.atualizaTitulo}/>
                        </Form.Group>
        
                        <Form.Group className="mb-3" controlId="formBasicAutor">
                           <Form.Label>Autor</Form.Label>
                           <Form.Control type="text" placeholder="Digite o Autor" value={this.state.autor} onChange={this.atualizaAutor}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEditora">
                           <Form.Label>Editora</Form.Label>
                          <Form.Control type="text" placeholder="Digite a Editora" value={this.state.editora} onChange={this.atualizaEditora}/>
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
                        Cadastrar Livro
                </Button>
                {this.renderTabela()};
            </div>

        );
    }
     

    
    
}

export default Books