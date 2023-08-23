# Vazou
O projeto ``Vazou`` se trata de um sistema que avalia e divulga o nível de segurança de um site baseado em ocorrencias prévias.</br>
Nosso sistema tem o objetivo de mostrar aos consumidores como os sites tratam os dados deles, a fim de prevenir e alertar que podem ser prejudicados.

## Setup
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
