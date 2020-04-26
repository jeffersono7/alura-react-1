import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: "",
      livro: "",
      preco: "",
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

    this.props.handleSubmit(this.state);

    this.setState(this.stateInicial);
  };

  render() {
    const { nome, livro, preco } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <div className="row">
          <div className="input-field col s4">
            <label htmlFor="nome">Nome</label>
            <input
              className="validate"
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.handleInput}
            />
          </div>

          <div className="input-field col s4">
            <label htmlFor="livro">Livro</label>
            <input
              className="validate"
              id="livro"
              type="text"
              name="livro"
              value={livro}
              onChange={this.handleInput}
            />
          </div>

          <div className="input-field col s4">
            <label htmlFor="preco">Preço</label>
            <input
              className="validate"
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.handleInput}
            />
          </div>
        </div>

        <button
          className="waves-effect waves-light indigo lighten-2 btn"
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
