import React, { Fragment, Component } from 'react';
import Header from '../../components/header/Header';
import DataTable from '../../components/data-table/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      titulo: 'Autores',
    };
  }

  componentDidMount() {
    ApiService.listarNomes()
      .then((res) => {
        if (res.message === 'success') {
          this.setState((state) => ({ nomes: [...state.nomes, ...res.data] }));
        }
      })
      .catch(() => PopUp.exibeMensagem('error', 'Erro ao recuperar autores!'));
  }

  render() {
    return (
      <Fragment>
        <Header />

        <div className='container'>
          <h1>Autores</h1>

          <DataTable
            dados={this.state.nomes}
            titulo={this.state.titulo}
            colunas={['nome']}
          />
        </div>
      </Fragment>
    );
  }
}

export default Autores;
