import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Tabela from "./Tabela";
import Form from "./Formulario";
import Header from "./Header";

class App extends Component {
  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1000",
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99",
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150",
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100",
      },
      {
        nome: "Nico",
        livro: "Java",
        preco: "100",
      },
    ],
  };

  removerAutor = (index) => {
    this.setState((state) => ({
      autores: state.autores.filter((a, i) => i !== index),
    }));
  };

  handleSubmit = (autor) => {
    const {nome, livro, preco} = autor;

    if (!nome || !livro || !preco) {
      return;
    }

    this.setState((state) => ({ autores: [...state.autores, autor] }));
  };

  render() {
    return (
      <Fragment>
        <Header />

        <div className="container mb-10">
          <Tabela
            autores={this.state.autores}
            removerAutor={this.removerAutor}
          />

          <Form handleSubmit={this.handleSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
