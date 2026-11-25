# 🔗 Tramita

**Tramita** é uma API RESTful de alta performance para encurtamento de links e rastreamento de métricas de acesso (cliques), desenvolvida em **PHP / Laravel** com foco em performance, boas práticas de design de software e arquitetura desacoplada.

---

## 🛠️ Tecnologias

- **Backend:** PHP, Laravel, Laravel Octane ([FrankenPHP](https://frankenphp.dev/))
- **Banco de Dados:** PostgreSQL (Docker) / SQLite (desenvolvimento e testes)
- **Qualidade & CI/CD:** PHPUnit (testes unitários e de integração), GitHub Actions, Dependabot
- **Infraestrutura:** Docker & Docker Compose

---

## 📂 Estrutura do Repositório

- **[`/server`](./server)**: Contém a API RESTful em Laravel / PHP, Docker Compose, migrations, services, form requests e suíte de testes PHPUnit.
  *(Para detalhes completos de arquitetura e configuração, veja o [README do Server](./server/README.md)).*

---

## 🚀 Como Iniciar

1. Entre na pasta do servidor:
   ```bash
   cd server
   ```
2. Siga as instruções descritas no [`server/README.md`](./server/README.md) para subir via Docker Compose ou localmente com `php artisan serve`.
