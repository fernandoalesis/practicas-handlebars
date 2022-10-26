const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
app.listen(8080, () => console.log("server runing in port 8080"));

//configurar motor plaSntillas
//1-definir motor plantillas (pug y ejs no es necesario)
app.engine("handlebars", handlebars.engine());
//2-ubica carpeta o directorio de los templates(si es necesario en pug y ejs)
// extension.handlebars
app.set("views", "./views");
//el primer parametro del motor de plantillas es siempre views.
//3- definir el motor para express(pug y ejs ver)
app.set("view engine", "handlebars");

//espacio publico del servidor
app.use(express.static("public"));
//RUTAS
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/contacto", (req, res) => {
  res.render("contact");
});
