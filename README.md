# Chat App

A simple real-time chat application built with **React** and **Vite**. This project demonstrates modern frontend development practices, including hot module replacement (HMR), fast refresh, and code linting.

## Features

- Real-time messaging
- Responsive UI built with React
- Fast development experience powered by Vite
- ESLint integration for code quality

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Start the development server:**

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

- `src/` — Main source code for the React app
- `public/` — Static assets
- `vite.config.js` — Vite configuration
- `.eslintrc` — ESLint rules

## ESLint Configuration

This project uses ESLint for code linting. You can expand the configuration for production use, and TypeScript integration is recommended for type-aware linting. Refer to the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for more details.

## Plugins Used

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — Uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — Uses SWC for Fast Refresh

## License

This project is licensed under the MIT License.
