# Sistema de Cadastro de Produtos e Categorias

Este é um projeto de sistema web desenvolvido em **Node.js** utilizando o framework **Express** e o motor de visualização **EJS**. O sistema permite gerenciar cadastros de produtos, fornecedores, clientes e categorias de forma dinâmica.

## 👥 Integrantes (Autores)
* **Felipe Drigo Binatto** - 2° DS/AMS
* **Maria Eduarda Silvestre Marcon** - 2° DS/AMS

---

## 🚀 Tecnologias Utilizadas
* **Node.js** - Ambiente de execução JavaScript backend
* **Express** - Framework web para gerenciamento de rotas e requisições
* **EJS (Embedded JavaScript templates)** - Motor de renderização HTML dinâmica
* **Bootstrap** - Framework CSS para estilização e responsividade da interface

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente na sua máquina:

### 1. Clonar ou Baixar o Projeto
Baixe os arquivos do projeto para o seu computador.

### 2. Instalar as Dependências
Abra o terminal na pasta raiz do projeto e execute o comando para instalar todos os pacotes necessários:
```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
Para rodar o projeto com atualização automática (via nodemon), execute o comando configurado no seu ambiente:
```bash
npm run dev
```

### 4. Acessar no Navegador
Após o terminal exibir que o servidor está rodando, abra o seu navegador e acesse:
* `http://localhost:3000`


---

## 📁 Estrutura de Pastas Principal
* `routes/` - Contém os arquivos de rotas que separam a lógica de cada entidade (`produtoRoutes.js`, `categoriaRoutes.js`, etc.).
* `views/` - Contém as páginas em formato `.ejs` que são renderizadas para o usuário na tela.
* `app.js` - Arquivo principal de configuração do servidor Express e dos middlewares básicos.
