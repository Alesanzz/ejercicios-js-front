const controller = {
  home: (req, res) => res.render("home"),

  culebrita: (req, res) => res.render("culebrita"),

  contador: (req, res) => res.render("contador"),

  listar: (req, res) => res.render("listar"),

  ahorcado: (req, res) => res.render("ahorcado"),

  desaparecerCuadro: (req, res) => res.render("desaparecerCuadro"),
};

module.exports = controller;
