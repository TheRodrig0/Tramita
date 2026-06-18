# 🔗 Tramita

> **Status:** 🚧 Work in Progress (Em Desenvolvimento)

**Tramita** é uma plataforma *full stack* de alta performance para encurtamento de links e rastreamento de métricas de acesso (Cliques). O projeto é desenvolvido de forma modular, separando as responsabilidades entre o Backend (API) e o Frontend.

---

## 📂 Estrutura do Repositório

Este repositório está organizado como um monorepo, separando os serviços da aplicação:

- **[`/server`](./server)**: Contém o Backend da aplicação, uma API RESTful de alta performance construída em **Laravel / PHP**.
  *(Para detalhes sobre arquitetura, banco de dados e testes da API, veja o [README do Server](./server/README.md)).*
- **[`/app`](./app)**: Contém o Frontend da aplicação web.

---

## 🚀 Como Iniciar

Se você deseja rodar a API localmente, siga os passos abaixo:

1. Entre na pasta do servidor:
   ```bash
   cd server
   ```
2. Siga as instruções descritas no `README.md` de dentro da pasta `/server`.
