# Projeto Trybesmith!
Loja de itens medievais, no formato de uma _API_, utilizando _Typescript_.
  
  Desenvolvida as camadas da aplicação (_Models_, _Service_ e _Controllers_) em seu código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um banco de dados utilizando o **MySQL** - Criação, Leitura, Atualização e Exclusão - `CRUD`
  

# Orientações


<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 


---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`
  
</details>


<details>
  <summary><strong>🏦 Conexão com o Banco</strong></summary><br />
  
  A conexão do banco local deverá conter os seguintes parâmetros:

  ```typescript
  import dotenv from 'dotenv';
  import mysql from 'mysql2/promise';

  dotenv.config();

  const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  }); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

  export default connection;
  ```
  As variáveis de ambiente serão salvas em um arquivo .env. Para segurança, o arquivo se encontra na lista .gitignore para não ser salvo. Use o template .envexample removendo o `example` do nome e preenchendo as informações necessárias conforme suas configurações do MySql.

  ```
    host: process.env.MYSQL_HOST
    user: process.env.MYSQL_USER
    password: process.env.MYSQL_PASSWORD
  ```

  Caso prefira usar Docker, não se esqueça de preencher essas mesmas informações nas linhas 36,37,38,52 do arquivo docker-compose.yml

</details>
