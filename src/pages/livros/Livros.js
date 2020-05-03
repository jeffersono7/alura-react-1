import React, { Fragment, Component } from 'react';
import Header from '../../components/Header/Header';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';
import Tabela from '../../components/Tabela/Tabela';

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livros: [],
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
    const campos = [{ titulo: 'Livros', dado: 'livro' }];

    return (
      <Fragment>
        <Header />

        <div className='container'>
          <h1>Livros</h1>

          <Tabela
            dados={this.state.livros}
            campos={campos}
          />
        </div>
      </Fragment>
    );
  }
}
export default Livros;
