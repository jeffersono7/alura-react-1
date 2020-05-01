const ApiService = {
  listarAutores: function () {
    return fetch('http://localhost:8000/api/autor')
      .then(this.tratarErros)
      .then((r) => r.json());
  },

  criarAutor: function (autor) {
    return fetch('http://localhost:8000/api/autor', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: autor,
    })
      .then(this.tratarErros)
      .then((r) => r.json());
  },

  listarNomes: function () {
    return fetch('http://localhost:8000/api/autor/nome')
      .then(this.tratarErros)
      .then((r) => r.json());
  },

  listarLivros: function () {
    return fetch('http://localhost:8000/api/autor/livro')
      .then(this.tratarErros)
      .then((r) => r.json());
  },

  removerAutor: function (id) {
    return fetch(`http://localhost:8000/api/autor/${id}`, {
      method: 'delete',
      headers: { 'content-type': 'application/json' },
    })
      .then(this.tratarErros)
      .then((r) => r.json());
  },

  tratarErros: function (res) {
    if (res.ok) {
      return res;
    }
    throw Error(res.responseText);
  },
};

export default ApiService;
