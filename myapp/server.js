const express = require("express");
const app = express();

// --My logger, nos muestra en la consola la url y la fecha en la que visitamos la url.

const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

app.get("/", function (req, res) {
  res.send("Operaciones Matematicas!");
});

// --Obtener mediante query´s

app.get("/add", function (req, res) {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const result = value1 + value2;
  res.send(`La suma de ${value1} + ${value2} es igual a : ${result}.`);
});
app.get("/substract", function (req, res) {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const result = value1 - value2;
  res.send(`La resta de ${value1} - ${value2} es igual a : ${result}.`);
});
app.get("/multiply", function (req, res) {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const result = value1 * value2;
  res.send(
    `La multiplicacion de ${value1} * ${value2} es igual a : ${result}.`
  );
});
app.get("/divide", function (req, res) {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);
  const result = value1 / value2;
  res.send(`La division de ${value1} / ${value2} es igual a : ${result}.`);
});

// --Obtener mediante param´s

app.get("/addparams/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const result = value1 + value2;
  res.send(`La suma de ${value1} + ${value2} es igual a : ${result}.`);
});
app.get("/substractparams/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const result = value1 - value2;
  res.send(`La resta de ${value1} - ${value2} es igual a : ${result}.`);
});
app.get("/multiplyparams/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const result = value1 * value2;
  res.send(
    `La multiplicacion de ${value1} * ${value2} es igual a : ${result}.`
  );
});
app.get("/divideparams/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const result = value1 / value2;
  res.send(`La division de ${value1} / ${value2} es igual a : ${result}.`);
});

app.listen(3001, () => console.log("Server is up and running"));
