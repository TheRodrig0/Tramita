# 🔗 Tramita - App (Frontend)

> **Status:** 🚧 Work in Progress (Em Desenvolvimento)

> <img width="1917" height="871" alt="image" src="https://github.com/user-attachments/assets/ecff12c3-f6f6-4813-a1a5-daf719b75a40" />

Este diretório contém a **aplicação web frontend** da plataforma Tramita. Ela é uma SPA (Single Page Application) moderna construída com **React** e **TypeScript**, responsável pela interface de usuário para encurtamento de links, gerenciamento de URLs e visualização de métricas de cliques.

---

## 🛠️ Tecnologias Utilizadas

A aplicação foi estruturada utilizando ferramentas modernas do ecossistema JavaScript para garantir rapidez no desenvolvimento e performance no carregamento:

<div align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
</div>

- **Biblioteca Principal:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Ferramenta de Build / Servidor de Dev:** [Vite](https://vite.dev/)
- **Estilização:** Vanilla CSS para controle refinado da interface.
- **Qualidade de Código:** ESLint para análise estática e padronização.

---

## 🚀 Como Iniciar Localmente

Para rodar a aplicação localmente, certifique-se de ter o **Node.js** (versão LTS recomendada) instalado.

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do diretório `app/` para especificar a URL da API do backend:
   ```env
   VITE_API_URL=http://localhost:8000
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O Vite iniciará o servidor. Normalmente a aplicação estará disponível em `http://localhost:5173/` (ou outra porta indicada no terminal).

4. **Scripts Disponíveis:**
   - `npm run dev`: Executa a aplicação em modo de desenvolvimento com Hot Module Replacement (HMR).
   - `npm run build`: Compila a aplicação para produção (gera os arquivos otimizados na pasta `dist/`).
   - `npm run preview`: Roda localmente a versão buildada de produção para fins de teste.
   - `npm run lint`: Executa a verificação do ESLint para validar boas práticas e consistência do código.

---

## 📂 Estrutura de Diretórios

A estrutura interna da aplicação em `src/` segue um padrão modular:

```text
src/
├── assets/       # Arquivos estáticos (imagens, ícones, logotipos)
├── App.css       # Estilos específicos do componente principal
├── App.tsx       # Componente raiz da aplicação
├── index.css     # Estilos globais e resets CSS
├── main.tsx      # Ponto de entrada da aplicação React e montagem no DOM
```

---

## 📐 Integração com a API

A aplicação consome os seguintes endpoints expostos pelo [servidor da API](../server):
- **Encurtamento de Links:** Criação de hashes curtos e gerenciamento de expiração.
- **Rastreamento de Métricas:** Consulta aos dados de cliques gerados pelos links.
