const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
  {
    id: 1,
    nome: "Informática",
    email : "emailcliente@gmail.com",
    tel : "(19) 99999-9999",
    cid : "São Paulo - SP"
  },
  {
    id: 2,
    nome: "Pneus Do zé",
    email : "pneusdoze@gmail.com",
    tel : "(19) 99999-9999",
    cid : "Itu - SP"
  },
  {
    id: 3,
    nome: "Hospital",
    email : "hospitalsc@gmial.com",
    tel : "(11) 99999-9999",
    cid : "Salto - SP"
  }
];

router.get("/", (req, res) =>{
    res.render("clientes/index", {
        clientes: clientes
    });
});

router.get("/cadastro", (req, res) => {
  res.render("clientes/form-cadastro")
});

router.post("/", (req, res) => {
  const {nome, email, tel, cid} = req.body;
  const novocliente ={
    id: clientes.length + 1,
    nome: nome,
    email : email,
    tel : tel,
    cid : cid
  };
  clientes.push(novocliente);
  res.redirect('/clientes');
})

module.exports = router;
