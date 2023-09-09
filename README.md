<h1 align="left">🔄 Atualizador de Preços</h1>

###

<p align="left"> Esta é uma ferramenta essencial para empresas de e-commerce, permitindo aos usuários atualizar os preços de seus produtos de forma eficiente e precisa através de um upload de arquivo CSV. Para funcionar é preciso que o arquivo contenha as colunas: "product_code" e "new_price", com seus respectivos valores, de acordo com os produtos em estoque da empresa. Após o upload, validações são feitas para garantir uma atualização sem erros.</p>

###

<div align="center">

<img src="https://github.com/brunnaserafina/price-updater/assets/106851605/f544b36a-cf1a-4913-b592-43b550d6e47c" />

</div>

###

###

<br clear="both">

### Funcionalidades

- Upload arquivo CSV
- Sidebar com logotipo da empresa para futuras implementações
- Botão de validação
- Botão de atualização
- Tabela com as colunas (Código, Nome, Preço Atual, Novo Preço e Validação)
- Responsividade

###

<br />

### Tecnologias utilizadas

###

  <img align="left" height="30px" alt="typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img align="left" alt="react" height="30px" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
   <img align="left" alt="axios" height="30px" src="https://camo.githubusercontent.com/02621d023c99135970b1abbfe932b6a6a0b2e42aaebedae5f8299fd88d9ce029/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6178696f732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d696e666f726d6174696f6e616c" />
   <img align="left" alt="axios" height="30px" src="https://camo.githubusercontent.com/41d7c6da357d2344cd832f0d738839951e0d43a23064154c07d80a67dd74c5f4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d69636f6e732532302d2532333230323332612e7376673f267374796c653d666f722d7468652d626164676526636f6c6f723d663238646337266c6f676f3d72656163742d69636f6e73266c6f676f436f6c6f723d253233363144414642" />
   <img align="left" alt="styled-components" height="30px" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />

###

<br />
<br />
<br />
<br />

### Pré-requisitos de instalação

Certifique-se de ter os seguintes pré-requisitos instalados antes de executar o projeto:

- Node.js
- npm ou Yarn

<br />
<br />

### ▶️ Rodando a aplicação

1. Clone e rode o repositório do back-end seguindo as instruções em https://github.com/brunnaserafina/price-updater-backend
2. Clone este repositório em uma pasta de sua preferência:

```bash
 $ git clone https://github.com/brunnaserafina/price-updater.git
```

3. Navegue até o diretório do projeto:

```bash
 $ cd price-updater
```

4. Instale as dependências:

```bash
 $ npm i
```

5. Crie um arquivo .env seguindo o modelo .env.example e configure a URL com o endereço do localhost da API

```bash
  REACT_APP_BASE_URL="http://localhost:5000"
```

5. Você pode, opcionalmente, rodar o build para criar uma versão de produção da aplicação

```bash
 $ npm run build
```

6. Rode a aplicação:

```bash
 $ npm start
```

7. Por fim, acesse http://localhost:3000 no seu browser e teste a aplicação validando seus arquivos CSV!

###

<br />
