# Yeoman Generator for Frontend/Backend Templates

This generator lets you scaffold either a frontend or backend project using the templates in `app/templates/`.

## Usage

1. Install dependencies:
   ```sh
   npm install
   ```
2. Link the generator locally:
   ```sh
   npm link
   ```
3. Run the generator in a new directory:
   ```sh
   yo app
   ```

## Templates
- `frontend`: React + Vite
- `backend`: Node.js + TypeScript

## File Structure
```
generators/
  app/
    index.js
    templates/
      frontend/
      backend/
```
