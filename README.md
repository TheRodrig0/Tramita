# 🔗 Tramita

> **Status:** 🚧 Work in Progress (Em Desenvolvimento)

**Tramita** é uma API RESTful de alta performance para encurtamento de links e rastreamento de métricas de acesso (Cliques). O projeto está sendo desenvolvido com foco em performance, boas práticas de design de software e arquitetura limpa.

---

## 🛠️ Tecnologias Utilizadas

<div align="left">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  <img src="https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=composer&logoColor=white" alt="Composer" />
</div>

## 📐 Padrões de Arquitetura

O projeto adota uma arquitetura desacoplada para garantir facilidade de manutenção e testes:

1.  **Form Requests (`Http/Requests`):** Validação e sanitização de dados HTTP isolada dos Controllers (funciona como um validador de esquema de entrada).
2.  **Controller Layer (`Http/Controllers`):** Apenas recebe requisições, repassa os dados validados para a camada de serviço e retorna respostas JSON padronizadas.
3.  **Service Layer (`Services/`):** Centraliza toda a regra de negócio do encurtador de links (ex: lógica de geração de hashes curtos e únicos, cálculo de expiração, etc.).
4.  **Eloquent Models (`Models/`):** Abstração de banco de dados baseada em Active Record para persistência das entidades `Link`, `Click` e `User`.
