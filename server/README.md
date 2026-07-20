# 🔗 Tramita - Server (API)

> **Status:** 🚧 Work in Progress (Em Desenvolvimento)

Este diretório contém a **API RESTful** da plataforma Tramita, construída em **Laravel / PHP**. Ela é responsável pela lógica de negócios de encurtamento de links e pelo rastreamento de métricas de acesso em alta performance.

---

## 🛠️ Tecnologias Utilizadas

A infraestrutura foi modernizada para utilizar **FrankenPHP** (servidor web e de aplicação de alta performance) em conjunto com **Laravel Octane**.

<div align="left">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
</div>

- **Servidor:** [FrankenPHP](https://frankenphp.dev/) via Laravel Octane
- **Banco de Dados:** PostgreSQL (via Docker) ou SQLite (Padrão para desenvolvimento local sem Docker)
- **Containerização:** Docker Compose (`compose.yaml` e `dockerfile`)

---

## 🚀 Como Iniciar Localmente

Você tem duas opções para rodar o projeto localmente: utilizando **Docker (Recomendado)** para aproveitar o servidor FrankenPHP e o PostgreSQL, ou o tradicional **PHP Artisan Serve**.

### Opção 1: Via Docker Compose (Recomendado)

1. **Configure o ambiente:**
   Copie o arquivo de exemplo e crie o seu `.env`:
   ```bash
   cp .env.example .env
   ```
   *Nota: O `compose.yaml` já provisiona um contêiner PostgreSQL (`pgsql`). Para usá-lo, modifique as seguintes variáveis no seu `.env`:*
   ```env
   DB_CONNECTION=pgsql
   DB_HOST=pgsql
   DB_PORT=5432
   DB_DATABASE=tramita
   DB_USERNAME=tramita
   DB_PASSWORD=secret
   ```

2. **Suba os contêineres e realize o build:**
   ```bash
   docker compose up -d --build
   ```

3. **Gere a chave da aplicação e rode as migrations:**
   ```bash
   docker compose exec frankenphp php artisan key:generate
   docker compose exec frankenphp php artisan migrate
   ```
   
A API estará rodando em `http://localhost`.

### Opção 2: Tradicional (PHP Built-in Server + SQLite)

1. **Instale as dependências do PHP:**
   ```bash
   composer install
   ```

2. **Configure o ambiente:**
   Copie o arquivo de exemplo e crie o seu `.env`:
   ```bash
   cp .env.example .env
   ```
   *(Certifique-se de configurar o banco de dados no `.env`, o padrão atual é SQLite)*

3. **Gere a chave da aplicação e rode as migrations:**
   ```bash
   php artisan key:generate
   php artisan migrate
   ```

4. **Inicie o Servidor Local:**
   ```bash
   php artisan serve
   ```
   A API estará rodando em `http://127.0.0.1:8000`.

---

## 📐 Padrões de Arquitetura

O backend adota uma arquitetura desacoplada para garantir facilidade de manutenção e testes:

1. **Form Requests (`Http/Requests`):** Validação e sanitização de dados HTTP isolada dos Controllers (funciona como um validador de esquema de entrada).
2. **Controller Layer (`Http/Controllers`):** Apenas recebe requisições, repassa os dados validados para a camada de serviço e retorna respostas JSON padronizadas.
3. **Service Layer (`Services/`):** Centraliza toda a regra de negócio do encurtador de links (ex: lógica de geração de hashes curtos e únicos, cálculo de expiração, etc.).
4. **Eloquent Models (`Models/`):** Abstração de banco de dados baseada em Active Record para persistência das entidades.

---

## 🧪 Como Rodar os Testes

Este projeto utiliza testes automatizados (Unitários e de Feature) escritos com PHPUnit. Para executar a suíte de testes completa, utilize:

```bash
php artisan test
```

*(Se estiver utilizando Docker, execute: `docker compose exec frankenphp php artisan test`)*
