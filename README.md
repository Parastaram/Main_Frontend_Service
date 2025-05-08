<div align="center">
  <img src="./src/assets/logo.png" alt="Logo" />
</div>

<h1>
Parastaram Main Frontend Service
</h1>

<p>Developed By: <a href="github.com/AliDeWeb">Ali Moradi</a></p>

## How to run service

1. Create environments file, for development stage its name must be .env

2. Run backend service

3. Build project and start it

```shell
  $ npm run build && npm start
```

## 🚀 Technologies Used

- Next.js (App Router)
- React.js
- TypeScript
- Tailwind CSS
- React Query

## 🏗️ Project Structure

```plaintext
src/
├── app/              # App Router structure
├── components/       # Shared UI components
├── lib/              # Utilities like fetchers, formatters
├── services/         # API layer (React Query)
├── types/            # Global TypeScript types & interfaces
```

## 🧩 Contributing

Before creating a pull request:

1. Make sure your code follows the existing structure and naming conventions.
2. Run lint and test commands to verify your changes.
3. Push your changes in a separate branch and open a pull request.

## 📏 Rules

Please follow these coding conventions and standards when contributing:

- Use **camelCase** for variable and function names.
- Use **kebab-case** for folder names and filenames.

## ✅ Commit Message Rules

This project uses [commitlint](https://github.com/conventional-changelog/commitlint) with Angular-style commit messages. Please follow these rules:

- Each commit message **must not exceed 72 characters**.
- Use one of the following types:
  - `build`: Changes that affect the build system or external dependencies
  - `chore`: Routine tasks or maintenance
  - `ci`: Continuous integration configuration
  - `docs`: Documentation-only changes
  - `feat`: A new feature
  - `fix`: A bug fix
  - `perf`: A code change that improves performance
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `revert`: Reverts a previous commit
  - `style`: Changes that do not affect the meaning of the code (formatting, etc.)
  - `test`: Adding or fixing tests
  - `sample`: Sample or example data/code
- The subject line should follow one of the approved case styles:
  - `sentence-case`
  - `start-case`
  - `pascal-case`
  - `upper-case`
  - `lower-case`

## 📜 License

This project is licensed under the [Custom](/LICENSE) License.
