# Projeto de Download de Livros Grátis

Este é um projeto de uma página web que permite o acesso ao download de livros gratuitos. O projeto é desenvolvido utilizando diversas tecnologias modernas como HTML5, CSS3, Javascript com TypeScript, Vite, TailwindCSS, FontAwesome, e Axios para consumir dados da API do Google Books. O objetivo é fornecer uma interface simples e intuitiva para que os usuários possam encontrar e baixar livros diretamente de um banco de dados noSQL (Firebase), com os arquivos armazenados no Google Drive.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página web.
- **CSS3**: Estilização da página.
- **JavaScript com TypeScript**: Lógica do front-end.
- **Vite**: Ferramenta de build rápida para o desenvolvimento com suporte a hot reload.
- **TailwindCSS**: Framework para estilização rápida e responsiva.
- **FontAwesome**: Ícones para uma interface mais interativa.
- **Axios**: Para realizar requisições HTTP à API do Google Books.
- **Firebase (NoSQL)**: Banco de dados para armazenar informações sobre os livros.
- **Google Drive**: Armazenamento dos livros para download.

## Funcionalidades

- Exibição de uma lista de livros gratuitos usando dados recuperados da API do Google Books.
- Exibição das informações dos livros como: título, autor, capa, descrição, etc.
- Opção para os usuários realizarem o download dos livros, com os arquivos hospedados no Google Drive.
- Sistema de busca para facilitar a pesquisa dos livros desejados.
- Design responsivo e moderno utilizando TailwindCSS.
- Integração com o Firebase para armazenar e recuperar os livros via API.
- Sistema de cadastros básico que permitirá o usuário ter acesso ao link de download dos livros criado com firebase auth.

## Estrutura do Projeto
Na raiz "/" exite as pastas necessárias para que o projeto funcione # Imagens e outros arquivos estáticos (botões, cabeçalhos, etc) /API-call # chamada para API do google books /dist # arquivos do projeto em produção etc.

## Como Rodar o Projeto

### Requisitos

- Node.js (recomendado versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/projeto-livros-gratis.git


