// Exercício 1: Pense qual é o recurso que estamos trabalhando e altere os endpoints para que fiquem padronizados. - OK
// Exercício 2: Padronize todos os retornos para JSON. - OK
// Exercício 3: Utilize os verbos (POST, PUT, GET etc.) corretos para cada ação do CRUD. - OK
// Exercício 4: Garanta que todos os endpoints tenham as respostas (status code) corretas, ou seja,
// código para quando der tudo certo, código pra quando ocorrer erro etc.

const express = require("express");
const ProductModel = require("../models/productModel");

const router = express.Router();

// Pode ser feito com IF como no segundo Exemplo, mas devemos priorizar a forma com TRY/CATCH.

// router.get('/list-products', async (req, res, next) => {
router.get("/", async (req, res, next) => {
  try {
    const products = await ProductModel.getAll();
    // res.send(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(204).json({ message: error });
    // Aqui podemos lançar um erro personalizado...
    // Throw new Error('MENSAGEM QUE QUISERMOS');
  }
});

// router.get('/get-by-id/:id', async (req, res, next) => {
router.get("/:id", async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product)
    return res.status(404).json({ message: "Nenhum produto com esse ID" });

  // res.send(product);
  res.status(200).json({ product, message: "Produto Encontrado" });
});

// router.post('/add-user', async (req, res) => {
router.post("/", async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    // res.send(newProduct);
    res.status(201).json({ newProduct, message: "Produto Adicionado" });
  } catch (error) {
    res.status(204).json({ message: error });
  }
});

// router.post('/delete-user/:id', async (req, res) => {
// Substituido POST por DELETE
router.delete("/:id", async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    // res.send(product);
    res.status(200).json({ products, message: "Produto Removido" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// router.post('/update-user/:id', async (req, res) => {
// Substituido POST por PUT
router.put("/:id", async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    // res.send(product);
    res.status(200).json({ products, message: "Produto Alterado" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
