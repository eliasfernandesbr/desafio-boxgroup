const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

//ROTA PARA BUSCAR API DE LINGUAGENS DE PROGRAMAÇÃO NO GITHUB
app.get("/api/languages", async (req, res) => {
  try {
    const { data } = await axios.get("https://api.github.com/languages");
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//ROTA PARA BUSCAR REPOSITÓRIOS NA API DO GITHUB
app.get("/api/repos/:lang", async (req, res) => {
  const lang = req.params.lang;
  console.log("Estou aqui");
  console.log(lang);
  try {
    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=language:${lang}&order=desc`
    );
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//ROTAS PARA SERVIR ARQUIVO ESTÁTICO
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", async (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (error) {
      if (error) {
        res.status(500).send(error.message);
      }
    }
  );
});

//PORTA E SERVER START
app.listen(port, () => {
  console.log("🔸START BACKEND SERVER🔸");
});
