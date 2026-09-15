const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let fornecedores = [
  {
    id: 1,
    razao: "Informática",
    cnpj: "12345678000195",
    email: "empresax@empresa.com",
    tel : "(99) 99999-9999",
    cid : "São Paulo - SP"
  },
  {
    id: 2,
    razao: "Mercado",
    cnpj: "12345678000195",
    email: "mercado@empresa.com",
    tel : "(99) 99999-9999",
    cid : "indaituba - SP"
  },
  {
    id: 3,
    razao: "vestuário",
    cnpj: "12345678000195",
    email: "vestmarck@empresa.com",
    tel : "(99) 99999-9999",
    cid : "Santos - SP"
  },
];

router.get("/", (req, res) =>{
    res.render("fornecedor/index", {
        fornecedores: fornecedores
    });
});

router.get("/cadastro", (req, res) => {
  res.render("fornecedor/form-cadastro")
});

router.post("/", (req, res) => {
  const {razao, cnpj, email, tel, cid} = req.body;
  const novoFornecedor ={
    id: fornecedores.length + 1,
    razao : razao,
    cnpj : cnpj,
    email : email,
    tel : tel,
    cid : cid
  };
  fornecedores.push(novoFornecedor);
  res.redirect('/fornecedores');
})

module.exports = router;
