const usuarios = require("../model/usuarios.json");

exports.getUsuarios = (req, res) => {
  // console.log(usuarios)
  res.status(200).send(usuarios);
};

exports.getById = (req, res) => {
  const id = req.params.id;
  const usuarioPorId = usuarios.some(usuario => usuario.id === parseInt(id));
  if (usuarioPorId) {
    res.send(usuarios.filter(usuario => usuario.id === parseInt(id)));
  } else {
    res.status(404).send(`Nenhum usuário com id de ${id} foi encontrado`);
  }
};

exports.getBooks = (req, res) => {
    const todosLivros = usuarios.map(usuario => usuario.bookTitle)
    // console.log(todosLivros)
    res.status(200).send(todosLivros)
}

exports.getBookByUser = (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(usuario => usuario.id === parseInt(id))
    // console.log(usuario)
    res.status(200).send(`Usuário: ${(usuario.name)}, livro: ${usuario.bookTitle}`)
}