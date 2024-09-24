# Zepto Font Group

This project is a web application that allows users to upload font files, view a list of uploaded fonts, create groups of similar fonts, and finally see the organized font groups.

### Key Features

- **Font Upload**: Users can upload various font files.
- **Font List**: A comprehensive list displays all uploaded fonts.
- **Font Group Creation**: Users can create groups consisting of two or more similar fonts.
- **View Font Groups**: Easily view and manage created font groups.

This project is built using React and Vite, ensuring a fast and responsive user experience.

## Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Environment Variables](#environment-variables)

## About

This project is a [React](https://reactjs.org/) application bootstrapped with [Vite](https://vitejs.dev/). Vite provides a fast and lightweight development environment with hot module replacement (HMR) and an optimized production build.

## Technologies

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

Ensure that you have the following tools installed on your development machine:

- [Node.js](https://nodejs.org/en/download/) (v14.18.0 or higher)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pijushchakma/Zepto-Font-Group
   ```
2. Install dependencies:

```bash
    npm install
```

### Running Locally

```bash
  npm run dev
```

This will start the app in development mode. Open http://localhost:5173 to view it in the browser. The page will reload if you make edits, and you'll see any lint errors in the console.

### Building for Production

To create a production build:

```
npm run build

```

This will bundle the app into static files for production, which will be available in the dist folder.

### Preview Production Build

To preview the production build locally:

```
npm run preview
```

### Environment Variables

To configure environment-specific variables, create an .env file at the root of your project. The following environment variables can be set:

```
VITE_API_URL=https://api.example.com
```

You can access these variables in your React components using import.meta.env.

### Example:

```
const apiUrl = import.meta.env.VITE_API_URL;
```
