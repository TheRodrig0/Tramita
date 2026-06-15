# Pull Request Guidelines

When asked to generate a Pull Request description, you MUST follow this structure, inspired by standard open-source changelogs.

## Structure Rules

1. **Categorization**: Group all changes under specific headings using `###`.
   Valid categories include:
   - `### Security`
   - `### Features`
   - `### Bug Fixes`
   - `### Performance`
   - `### Chores`
   - `### Breaking Changes`
2. **Bullet Points**: Every change must be a bolded bullet point under its respective category.
3. **Impact Description**: Underneath the main bullet point, provide a brief paragraph explaining *why* this change matters or *how* it works. This is crucial for context.
4. **Issue References**: Include PR or issue numbers at the end of the bullet point (e.g., `(#123)`).

## Example Format

### Security
* **Installs now pinned + integrity-checked (#261, #262)**
  `curl|bash` and detached installs no longer fetch hook files from the moving main branch — they download from the immutable tags to prevent supply-chain attacks.

### Features
* **New Authentication Core (#263)**
  Implemented a robust login and registration system using Laravel Sanctum, paving the way for third-party integrations.

### Performance
* **Switched to Primitive Array Caching (#264)**
  Replaced entire Eloquent Models in SQLite Cache with simple data arrays. This eliminates `__PHP_Incomplete_Class` errors and drops redirect latency to under 3ms.
