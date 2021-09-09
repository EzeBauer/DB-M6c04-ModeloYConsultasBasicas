const db = require("../database/models");


module.exports = {
  list: (req, res) => {
    db.Pelicula.findAll()
     .then((movies) =>
        res.render("moviesList", {
          title: "Peliculas",
          movies
        })
      )
      .catch((error) => console.log(error));
  },

  detail: (req, res) => {
    db.Pelicula.findByPk(req.params.id)
      .then((movie) =>
        res.render("moviesDetail", {
          movie,
        })
      )
      .catch((error) => console.log(error));
  },

  new: (req, res) => {
    db.Pelicula.findAll({
      order: [["release_date", "DESC"]],
      
    })
    .then((movies) =>
      res.render("newestMovies", {
        movies
      })
    );
  },
  recomended: (req, res) => {
    db.Pelicula.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    })
    .then((movies) =>

      res.render("recommendedMovies", {
        movies
      })
    );
  },
};
  