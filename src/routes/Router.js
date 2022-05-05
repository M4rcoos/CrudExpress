const express = require("express");
const fruitRoutes = express.Router();

const {
  create,
  list,
  fruit,
  update,
  deleteAFruit,
} = require("../controllers/Controllersfruit");

//retorna uma fruta
fruitRoutes.get("/:index", fruit);

//retorna todas as frutas
fruitRoutes.get("/", list);

//criar uma nova frutas
fruitRoutes.post("/create", create);

//atualizar uma frutas
fruitRoutes.put("/update/:index", update);

//deletar uma fruta
fruitRoutes.delete("/delete/:index", deleteAFruit);

module.exports = { fruitRoutes };
