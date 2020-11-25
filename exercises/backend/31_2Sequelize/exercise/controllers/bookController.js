const router = require("express").Router();
const { Book } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Bonus - Verifica se foi passado um author e busca os livros desse autor, caso contrario lista todos
    const { author } = req.query;
    if (author) {
      const books = await Book.findAll({ where: { author } });
      return res.status(200).json(books);
    }
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json({ message: "Algo deu errado!", err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ message: "Algo deu errado!", err });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });
    return res.status(200).json({ message: "Book created", book });
  } catch (err) {
    return res.status(500).json({ message: "Algo deu errado!", err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    await Book.update(
      { title, author, pageQuantity },
      { where: { id: req.params.id } },
    );
    return res.status(200).json({ message: "Book updated" });
  } catch (err) {
    return res.status(500).json({ message: "Algo deu errado!", err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    Book.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Algo deu errado!", err });
  }
});

module.exports = router;
