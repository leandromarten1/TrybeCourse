const express = require("express");
const app = express();
const controllers = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => res.send("Hello World! Acesse o endpoint /books"));

app.use("/books", controllers.book);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
