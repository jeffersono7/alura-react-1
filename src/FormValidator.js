import validator from 'validator';

class FormValidator {
  constructor(validacoes) {
    this.validacoes = validacoes;
  }

  isValid(state) {
    let validacao = this.getResultValido();

    this.validacoes.forEach((regra) => {
      const campoValor = state[regra.campo.toString()];
      const args = regra.args || [];

      const metodoValidacao =
        typeof regra.metodo === 'string'
          ? validator[regra.metodo]
          : regra.metodo;

      const valido =
        metodoValidacao(campoValor, ...args, state) === regra.validoQuando;

      if (!valido) {
        validacao[regra.campo] = {
          isInvalid: true,
          message: regra.mensagem,
        };

        validacao.isValid = false;
      }
    });

    return validacao;
  }

  getResultValido() {
    const validacao = {};

    this.validacoes.map(
      (regra) => (validacao[regra.campo] = { isInvalid: false, message: '' })
    );

    return { isValid: true, ...validacao };
  }
}

export default FormValidator;
