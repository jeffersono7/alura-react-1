import React, { Fragment, Component } from 'react';
import Header from '../../components/Header/Header';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';
import Tabela from '../../components/Tabela/Tabela';

class Autores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
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
    const campos = [{ titulo: 'Autores', dado: 'nome' }];

    return (
      <Fragment>
        <Header />

        <div className='container'>
          <h1>Autores</h1>

          <Tabela
            dados={this.state.nomes}
            campos={campos}
          />
        </div>
      </Fragment>
    );
  }
}

export default Autores;
