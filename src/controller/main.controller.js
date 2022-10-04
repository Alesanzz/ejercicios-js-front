const controller = {
  home: (req, res) => res.render("home"),

  culebrita: (req, res) => res.render("culebrita"),

  contador: (req, res) => res.render("contador"),

  listar: (req, res) => res.render("listar"),

  ahorcado: (req, res) => res.render("ahorcado"),

  desaparecerCuadro: (req, res) => res.render("desaparecerCuadro"),

  formulario1: (req, res) => res.render("formulario1"),

  formulario2: (req, res) => res.render("formulario2"),

  formulario3: (req, res) => res.render("formulario3"),

  formulario4: (req, res) => res.render("formulario4"),
  
};

module.exports = controller;
