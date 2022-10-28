const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
app.listen(8080, () => console.log("server runing in port 8080"));

//middlewares para interpretar informacion recibida desde el formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
//base datos
const productos = [];
//RUTAS
app.get("/", (req, res) => {
  res.render("home", {
    productos,
  });
});
app.get("/contacto", (req, res) => {
  res.render("contact");
});
app.get("/usuarios", (req, res) => {
  res.render("usuarios", {
    estudiantes: [{ name: "pedro" }, { name: " maria" }, { name: "carlos" }],
  });
});

app.get("/productos", (req, res) => {
  res.render("productos", {
    productos,
  });
});
app.post("/productos", (req, res) => {
  const newProduct = req.body;
  productos.push(newProduct);
  console.log(productos);
  res.redirect("/productos");
});
