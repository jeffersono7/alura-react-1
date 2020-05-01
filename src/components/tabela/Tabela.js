import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { autores, removerAutor } = props;

  const linhas = autores.map((autor) => (
    <tr key={autor.id}>
      <td>{autor.nome}</td>
      <td>{autor.livro}</td>
      <td>{autor.preco}</td>
      <td>
        <button
          onClick={() => removerAutor(autor.id)}
          className="waves-effect waves-light indigo lighten-2 btn"
        >
          Remover
        </button>
      </td>
    </tr>
  ));

  return <tbody>{linhas}</tbody>;
};

class Tabela extends Component {
  render() {
    const { autores, removerAutor } = this.props;

    return (
      <table className="centered highlight">
        <TableHead />

        <TableBody autores={autores} removerAutor={removerAutor} />
      </table>
    );
  }
}

export default Tabela;
