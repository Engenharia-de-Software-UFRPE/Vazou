# Vazou
O projeto ``Vazou`` se trata de um sistema que avalia e divulga o nível de segurança de um site baseado em ocorrencias prévias.</br>
Nosso sistema tem o objetivo de mostrar aos consumidores como os sites tratam os dados deles, a fim de prevenir e alertar que podem ser prejudicados.

## Setup BACKEND
### 1. Instalando as dependências
Com o Python 3.10 instalado e corretamente funcionando na sua PATH, faça:
> Antes de iniciar, para quem está trabalhando com Python pela primeira vez, recomendamos o uso de um Ambiente Virtual Python para esse projeto: https://www.treinaweb.com.br/blog/criando-ambientes-virtuais-para-projetos-python-com-o-virtualenv. Após criar a venv e acessar o seu ambiente virtual, você pode instalar os pacotes do projeto como se segue:

```
pip install -r requirements.txt
```
Após instaladas as dependências pela primeira vez, não será mais necessário instalá-las novamente, exceto se durante o decorrer do projeto uma nova dependência seja adicionada.
### 2. Configurando o Banco de dados local
Inicialmente, é necessário criar um banco de dados local do projeto em sua máquina. O framework Django consegue montar o banco de dados, logo crie seu BD executando os comandos:
```
python manage.py makemigrations vazou_app
python manage.py migrate
```
> Sempre que você fizer alguma alteração nos modelos do Banco de Dados é necessário utilizar esses comandos, caso haja conflito use a flag ```--run-syncdb``` no comando migrate.

### 3. Iniciando a aplicação web
Simples, rápido e fácil:
```
python manage.py runserver
```

## Setup FRONTEND
### 1. Instalando as dependências
Antes de rodar o front-end é necessário que faça a instalação do node.js e npm através do link: https://nodejs.org/en/download
Após isso, quando abrir o projeto no terminal você deve entrar na pasta vazou-frontend:
```
cd vazou-frontend
```
Dentro dela irá executar o comando para instalar todas as dependências:
```
npm i
```
> Sempre que ocorrer uma modificação nas dependências é necessário rodar esse comando novamente.

### 2. Iniciando a aplicação 
Com tudo bem instalado, agora é so rodar o seguinte código:
```
npm run dev
```

## Setup final
Para que o projeto funcione sem grandes problemas é necessário passar pelas etapas anteriores e ter tanto o back quanto o front rodando simultaneamente na sua máquina.

## Nosso Time

| BackEnd      | FrontEnd |
|:----------------:|:-------------------:|
| <img src="https://avatars.githubusercontent.com/u/91702532?v=4" width="100px;" alt=""/><br /><sub><b>Camile Alheiro</b></sub></a> | <img src="https://avatars.githubusercontent.com/u/48994718?v=4" width="100px;" alt=""/><br /><sub><b>Dayanne Carolina</b></sub></a> |
| <img src="https://avatars.githubusercontent.com/u/101341627?v=4" width="100px;" alt=""/><br /><sub><b>Heitor Ferraz</b></sub></a> | <img src="https://avatars.githubusercontent.com/u/110747518?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel Leão</b></sub></a> |
|<img src="https://avatars.githubusercontent.com/u/110747356?v=4" width="100px;" alt=""/><br /><sub><b>Maria Gabrielly</b></sub></a>| <img src="https://avatars.githubusercontent.com/u/83296570?v=4" width="100px;" alt=""/><br /><sub><b>João Victor</b></sub></a> |
| <img src="https://avatars.githubusercontent.com/u/61083199?v=4" width="100px;" alt=""/><br /><sub><b>Stella Nazário</b></sub></a> | <img src="https://avatars.githubusercontent.com/u/110426628?v=4" width="100px;" alt=""/><br /><sub><b>Marina Mota</b></sub></a> |
