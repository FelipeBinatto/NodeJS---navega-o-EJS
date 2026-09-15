const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let produtos = [
  {
    id: 1,
    nome: "Notebook",
    descricao: "Notebook para uso profissional",
    preco: 3500,
    estoque: 10,
    categoria: "Informática"
  },
  {
    id: 2,
    nome: "Celular",
    descricao: "Celular para uso Pessoal",
    preco: 1500,
    estoque: 18,
    categoria: "Informática"
  },
  { 
    id: 3,
    nome: "Caderno",
    descricao: "caderno para anotacções em bom estado",
    preco: 350000,
    estoque: 10990,
    categoria: "Papelária"
  }
];

router.get("/", (req, res) => {
  res.render("produtos/index", {
    produtos : produtos
  });
});

router.get("/cadastro", (req, res) => {
  res.render("produtos/form-cadastro")
});

router.post("/", (req, res) => {
  const { nome, descricao, preco, estoque, categoria } = req.body;
  const novoProduto = {
    id: produtos.length + 1,
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    categoria: categoria
  };
  produtos.push(novoProduto);
  res.redirect('/produtos');
})

module.exports = router;
