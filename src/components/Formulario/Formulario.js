import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import FormValidator from '../../utils/FormValidator';
import Toast from '../Toast/Toast';

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
      mensagem: {
        open: false,
        texto: '',
        tipo: 'success',
      },
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

    const erros = camposInvalido.reduce(
      (texto, campo) => `${texto} ${campo.message} .`,
      ''
    );

    this.setState({ mensagem: { open: true, texto: erros, tipo: 'error' } });
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <>
        <Toast
          open={this.state.mensagem.open}
          handleClose={() => this.setState({ mensagem: { open: false } })}
          severity={this.state.mensagem.tipo}
        >
          {this.state.mensagem.texto}
        </Toast>

        <form onSubmit={this.handleSubmitForm}>
          <Grid container spacing={2} alignItems='center'>
            <Grid item>
              <TextField
                id='nome'
                name='nome'
                label='Nome'
                variant='outlined'
                value={nome}
                onChange={this.handleInput}
              />
            </Grid>

            <Grid item>
              <TextField
                id='livro'
                name='livro'
                label='Livro'
                variant='outlined'
                value={livro}
                onChange={this.handleInput}
              />
            </Grid>

            <Grid item>
              <TextField
                id='preco'
                name='preco'
                label='Preço'
                variant='outlined'
                value={preco}
                onChange={this.handleInput}
              />
            </Grid>

            <Grid item>
              <Button type='submit' variant='outlined' color='primary'>
                Salvar
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    );
  }
}

export default Formulario;
