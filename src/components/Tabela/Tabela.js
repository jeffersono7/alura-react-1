import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const CellDelete = ({ removerDado, id }) => {
  if (!removerDado) {
    return null;
  }

  return (
    <TableCell>
      <Button
        variant='contained'
        color='primary'
        onClick={() => removerDado(id)}
      >
        Remover
      </Button>
    </TableCell>
  );
};

const TituloDelete = ({ removerDado }) => {
  if (!removerDado) {
    return null;
  }

  return <TableCell>Remover</TableCell>;
};

const Tabela = (props) => {
  const { dados, removerDado, campos } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {campos.map((campo, index) => (
            <TableCell key={index}>{campo.titulo}</TableCell>
          ))}

          <TituloDelete removerDado={removerDado} />
        </TableRow>
      </TableHead>

      <TableBody>
        {dados.map((dado) => (
          <TableRow key={dado.id}>
            {campos.map((campo, indexCampo) => (
              <TableCell key={indexCampo}>{dado[campo.dado]}</TableCell>
            ))}

            <CellDelete id={dado.id} removerDado={removerDado} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Tabela;
