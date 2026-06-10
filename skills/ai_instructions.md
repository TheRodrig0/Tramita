# AI Instructions & Coding Guidelines

This document outlines the architectural rules, coding standards, and constraints for developing the High-Performance Link Shortener API.

## Core Rules & Constraints

### 1. Pure Backend REST API (No Frontend)
- The `server` folder is a stateless backend API.
- Do NOT add frontend packages, NPM scripts, Vite, TailwindCSS, or Blade templates for page rendering.
- Keep only backend configurations and API routing files.

### 2. Pragmatic & Direct Code (Strictly No Over-Engineering)
- **Do NOT use dogmatic "Clean Code" abstractions** like Service Pattern, Repository Pattern, or custom Form Requests unless absolutely necessary.
- Avoid indirection. Keep code simple, readable, and written directly where it is executed (e.g., directly inside Controllers or Eloquent Models).
- Prioritize developer efficiency and straightforward, linear execution over multi-layered architectures.

### 3. Strict Typing
- Always declare strict types at the very top of all PHP files:
  ```php
  <?php

  declare(strict_types=1);
  ```

### 4. High-Performance Caching (Cache-Aside with Redis)
- Look up short links using the Redis cache key format `short:{code}` first.
- **Cache Hit**: Immediately return the original URL and redirect (302).
- **Cache Miss**: Fetch from the SQL database. If found, cache it in Redis with an expiration time (e.g., 24 hours) and then redirect.
- **Resiliency**: If Redis is down, query the SQL database directly without failing the request (graceful fallback).

### 5. Asynchronous Click Logging
- Redirections must remain fast (< 5ms). Do NOT write to the SQL database or resolve geolocation synchronously during the redirection request.
- Dispatch an asynchronous Queue Job to log clicks in the background.
- Use Redis as the queue connection for maximum performance.

### 6. Geolocation & User-Agent Parsing
- Resolve the visitor's country using the local MaxMind GeoIP2 database.
- Provide a mock resolver/fallback during local development if the `.mmdb` database file is missing.
- Parse the User-Agent header directly in the background job to log the visitor's browser and device type (Mobile/Desktop).
