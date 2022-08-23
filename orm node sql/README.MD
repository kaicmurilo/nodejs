ORM COM NODEJS

API COM SEQUELIZE E MYSQL

https://dev.mysql.com/downloads/


MySQL: é o banco SQL que vamos utilizar para guardar os dados da nossa API. Temos um tutorial com o passo a passo para instalação no Windows e alguns comandos iniciais. Para instalação no MacOS, baixe o arquivo DMG e siga as instruções de instalação. Se estiver usando Linux (Debian/Ubuntu), você pode baixar direto via terminal com sudo apt install mysql-server.
https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela


MySQL Workbench: durante o curso faremos as consultas ao banco direto pelo terminal, porém se você quiser, pode fazer isso usando um programa como o MySQL Workbench.
https://dev.mysql.com/downloads/workbench/

NodeJS: Se você já fez outros cursos dessa formação, o NodeJS já deve estar instalado. você pode conferir com o comando node --version ou node -v no terminal, caso retorne um número de versão, como por exemplo, v10.16.0, o NodeJS já está instalado. Caso precise instalar, os links estão na página oficial do NodeJS. Este curso foi desenvolvido usando a versão 10.20.0.
https://nodejs.org/en/download/

Postman: É o ambiente onde faremos os testes da nossa API, enviando requisições e recebendo respostas. Caso não tenha instalado, pode baixar na página oficial do Postman. Neste curso utilizamos a versão 7.21.2.
https://www.postman.com/downloads/



npm i mysql2
npm i sequelize
npm i sequelize-cli
npm i path

npx sequelize-cli init


https://sequelize.org/docs/v6/other-topics/migrations/