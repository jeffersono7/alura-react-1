import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './Home.css';
import Tabela from '../../components/Tabela/Tabela';
import Form from '../../components/Formulario/Formulario';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiService';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autores: [],
    };
  }

  componentDidMount() {
    ApiService.listarAutores()
      .then((res) => {
        if (res.message === 'success') {
          this.setState((state) => ({
            autores: [...state.autores, ...res.data],
          }));
        }
      })
      .catch(() => PopUp.exibeMensagem('error', 'Erro ao recuperar autores!'));
  }

  removerAutor = (id) => {
    ApiService.removerAutor(id)
      .then((res) => {
        if (res.message === 'deleted') {
          this.setState((state) => ({
            autores: state.autores.filter((autor) => autor.id !== id),
          }));

          PopUp.exibeMensagem('alert', 'Autor deletado com sucesso!');
        }
      })
      .catch((err) => PopUp.exibeMensagem('error', 'Erro ao deletar autor!'));
  };

  handleSubmit = (autor) => {
    ApiService.criarAutor(JSON.stringify(autor))
      .then((res) => {
        if (res.message === 'success') {
          this.setState((state) => ({ autores: [...state.autores, res.data] }));

          PopUp.exibeMensagem('success', 'Autor adicionado com sucesso!');
        }
      })
      .catch(() =>
        PopUp.exibeMensagem('error', 'Erro ao tentar criar o autor')
      );
  };

  render() {
    const campos = [
      { titulo: 'Autores', dado: 'nome' },
      { titulo: 'Livros', dado: 'livro' },
      { titulo: 'Preços', dado: 'preco' },
    ];

    return (
      <Fragment>
        <Header />

        <div className='container mb-10'>
          <h1>Casa do Código</h1>

          <Tabela
            dados={this.state.autores}
            removerDado={this.removerAutor}
            campos={campos}
          />

          <Form handleSubmit={this.handleSubmit} />
        </div>

        <Container>
          <Button>Normal Button</Button>
          <Button primary>Primary Button</Button>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
