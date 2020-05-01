import M from 'materialize-css';

const PopUp = {
  exibeMensagem: (status, mensagem) => {
    const classes = {
      success: 'green',
      error: 'red',
      alert: 'orange'
    };

    if (classes.hasOwnProperty(status)) {
      return M.toast({
        html: mensagem,
        classes: classes[status],
        displayLength: 2000,
      });
    }

    throw new Error('Status invalido no toast!');
  },
};

export default PopUp;
