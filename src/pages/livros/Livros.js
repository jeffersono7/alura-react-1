import React, { Fragment, Component } from 'react';
import Header from '../../components/header/Header';
import DataTable from '../../components/data-table/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      titulo: 'Livros',
    };
  }

  componentDidMount() {
    ApiService.listarLivros()
      .then((res) => {
        if (res.message === 'success') {
          this.setState((state) => ({
            livros: [...state.livros, ...res.data],
          }));
        }
      })
      .catch(() => PopUp.exibeMensagem('error', 'Erro ao recuperar livros!'));
  }

  render() {
    return (
      <Fragment>
        <Header />

        <div className='container'>
          <h1>Livros</h1>

          <DataTable
            dados={this.state.livros}
            titulo={this.state.titulo}
            colunas={['livro']}
          />
        </div>
      </Fragment>
    );
  }
}
export default Livros;
