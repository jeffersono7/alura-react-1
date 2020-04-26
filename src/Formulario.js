import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um nome',
      },
      {
        campo: 'livro',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Entre com um livro',
      },
      {
        campo: 'preco',
        metodo: 'isInt',
        args: [{ min: 0, max: 99999 }],
        validoQuando: true,
        mensagem: 'Entre com um valor númerico',
      },
    ]);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validator.getResultValido(),
    };

    this.state = this.stateInicial;
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();

    const validacao = this.validator.isValid(this.state);
    const { nome, livro, preco, isValid } = validacao;

    if (isValid) {
      this.props.handleSubmit(this.state);

      this.setState(this.stateInicial);

      return;
    }

    const camposInvalido = [nome, livro, preco].filter((e) => e.isInvalid);

    camposInvalido.forEach((c) => PopUp.exibeMensagem('error', c.message));
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <div className='row'>
          <div className='input-field col s4'>
            <label htmlFor='nome'>Nome</label>
            <input
              className='validate'
              id='nome'
              type='text'
              name='nome'
              value={nome}
              onChange={this.handleInput}
            />
          </div>

          <div className='input-field col s4'>
            <label htmlFor='livro'>Livro</label>
            <input
              className='validate'
              id='livro'
              type='text'
              name='livro'
              value={livro}
              onChange={this.handleInput}
            />
          </div>

          <div className='input-field col s4'>
            <label htmlFor='preco'>Preço</label>
            <input
              className='validate'
              id='preco'
              type='text'
              name='preco'
              value={preco}
              onChange={this.handleInput}
            />
          </div>
        </div>

        <button
          className='waves-effect waves-light indigo lighten-2 btn'
          type='submit'
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
