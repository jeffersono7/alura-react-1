const urlBase = 'http://localhost:8000/api/autor';

const consomeApi = (resource = '', method = 'get', body) => {
  return fetch(`${urlBase}/${resource}`, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body
  })
    .then(ApiService.tratarErros)
    .then((res) => res.json());
};

const ApiService = {
  listarAutores: function () {
    return consomeApi();
  },

  criarAutor: function (autor) {
    return consomeApi('', 'post', autor);
  },

  listarNomes: function () {
    return consomeApi('nome');
  },

  listarLivros: function () {
    return consomeApi('livro');
  },

  removerAutor: function (id) {
    return consomeApi(id, 'delete');
  },

  tratarErros: function (res) {
    if (res.ok) {
      return res;
    }
    throw Error(res.responseText);
  },
};

export default ApiService;
