import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';
import Button from './Button';
import Container from './Container';
import PopUp from './PopUp';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000',
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99',
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150',
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100',
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '100',
      },
    ],
  };

  removerAutor = (index) => {
    this.setState((state) => ({
      autores: state.autores.filter((a, i) => i !== index),
    }));

    PopUp.exibeMensagem('alert', 'Autor deletado com sucesso!');
  };

  handleSubmit = (autor) => {
    this.setState((state) => ({ autores: [...state.autores, autor] }));

    PopUp.exibeMensagem('success', 'Autor adicionado com sucesso!');
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className='container mb-10'>
          <h1>Casa do Código</h1>

          <Tabela
            autores={this.state.autores}
            removerAutor={this.removerAutor}
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

export default App;
