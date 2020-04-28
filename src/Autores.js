import React, { Fragment, Component } from 'react';
import Header from './Header';
import DataTable from './DataTable';

class Autores extends Component {
  state = {
    autores: [
      {
        id: 1,
        nome: 'Paulo',
        livro: 'React',
        preco: '1000',
      },
      {
        id: 2,
        nome: 'Daniel',
        livro: 'Java',
        preco: '99',
      },
      {
        id: 3,
        nome: 'Marcos',
        livro: 'Design',
        preco: '150',
      },
      {
        id: 4,
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100',
      },
      {
        id: 5,
        nome: 'Nico',
        livro: 'Java',
        preco: '100',
      },
    ],
    titulo: 'Autores',
    colunas: ['nome'],
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className='container'>
          <h1>Autores</h1>

          <DataTable
            dados={this.state.autores}
            titulo={this.state.titulo}
            colunas={this.state.colunas}
          />
        </div>
      </Fragment>
    );
  }
}

export default Autores;
