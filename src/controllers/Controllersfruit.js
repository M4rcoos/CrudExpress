const db = require("../../repositorio");

function list(req, res) {
  return res.json(db);
}

function create(req, res) {
  const { name, price } = req.body;
  const fruit = { name, price };

  if (!name) {
    return res.json({ error: "undefined name" });
  } else {
    db.push(name);
    return res.json(fruit);
  }
}

function fruit(req, res) {
  const { index } = req.params;
  //criando uma variavel para guardar as frutas
  const fruitExist = db[index];

  if (!fruitExist) {
    return res.json({ message: "fruta não existe!" });
  } else {
    return res.json(fruitExist);
  }
}
function update(req, res) {
  const { index } = req.params;
  const { name } = req.body;

  db[index] = name;

  return res.json(db);
}
function deleteAFruit(req, res) {
  const { index } = req.params;

  db.splice(index, 1);

  return res.json({ message: "A fruta foi deletada" });
}
module.exports = { deleteAFruit, create, list, fruit, update };
