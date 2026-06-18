# 🔗 Tramita - Server (API)

> **Status:** 🚧 Work in Progress (Em Desenvolvimento)

Este diretório contém a **API RESTful** da plataforma Tramita, construída em **Laravel / PHP**. Ela é responsável pela lógica de negócios de encurtamento de links e pelo rastreamento de métricas de acesso em alta performance.

---

## 🛠️ Tecnologias Utilizadas

<div align="left">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  <img src="https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=composer&logoColor=white" alt="Composer" />
</div>

---

## 🚀 Como Iniciar Localmente

Siga os passos abaixo para rodar a API na sua máquina local:

1. **Instale as dependências do PHP:**
   ```bash
   composer install
   ```

2. **Configure o ambiente:**
   Copie o arquivo de exemplo e crie o seu `.env`:
   ```bash
   cp .env.example .env
   ```
   *Certifique-se de configurar o banco de dados no `.env` (o padrão atual é SQLite).*

3. **Gere a chave da aplicação:**
   ```bash
   php artisan key:generate
   ```

4. **Rode as Migrations:**
   Crie as tabelas no banco de dados:
   ```bash
   php artisan migrate
   ```

5. **Inicie o Servidor Local:**
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
4. **Eloquent Models (`Models/`):** Abstração de banco de dados baseada em Active Record para persistência das entidades `Link`, `Click` e `User`.

---

## 🧪 Como Rodar os Testes

Este projeto utiliza testes automatizados (Unitários e de Feature) escritos com PHPUnit. Para executar a suíte de testes completa, utilize:

```bash
php artisan test
```
