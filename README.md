<div align="center">

# Genus Teach Post

![GitHub Tag](https://img.shields.io/github/v/tag/matheusmfranco/genus-teach-post) ![React](https://img.shields.io/badge/framework-reactTS-brightgreen) [![codecov](https://codecov.io/gh/MatheusMFranco/genus-teach-post/graph/badge.svg?token=RA5Q307Q8V)](https://codecov.io/gh/MatheusMFranco/genus-teach-post)

Web application built that generates random programming quotes.

</div>

## Preview

### Mobile

<img src="/prints/mobile.png" height="300" />

### Desktop

<img src="/prints/desktop.png" height="200" />

## Features

- Displays random programming quotes every 10 minutes;
- Built with React and TypeScript for a type-safe, efficient, and reactive experience;
- Responsive and user-friendly design for mobile and desktop.

## Technologies

- **React (CRA)**: JavaScript library for building user interfaces;
- **TypeScript**: Type-safe JavaScript with enhanced productivity and readability;
- **LESS**: CSS pre-processor styling for an appealing design;
- **Jest**: Framework that enables the creation of unit tests;
- **Stryker**: Mutation testing tool that helps improve code quality;
- **Prettier**: Code formatter that enforces consistent style for readability and simplicity;
- **ESLint**: Linting tool that identifies and fixes potential errors and code quality issues;
- **Standard-version**: Versioning tool that automates semantic versioning and changelog generation;
- **Commitlint**: Tool that enforces standardized commit messages for better readability and changelog consistency;
- **Husky**: Git hooks manager that enhances code quality by enabling pre-commit and pre-push checks.

## Before add something

This project uses husky para automate commits to still in pattern and pushes, so before to add something in this project, please run this command:

```bash
npm run prepare
```

To know more about how to create a good commit message, [read this documentation](https://www.conventionalcommits.org/en/v1.0.0/).

## Before commit something

To keep the project with the same code style, please, run these commands and commit the changes:

```bash
npm run fix
npm run format
```

## Run Local

```bash
npm install
npm start
```

## Run Docker

```bash
docker run -p 3000:80 matheusmagal/genus-teach-post
```

## Run Mock

By default, the local API is the production one, but if you want run your own json data, update the `db.json` with your data and run this command:

```bash
npx json-server --watch db.json --port 4000
```

And in another terminal, start the app with this command:

```bash
npm run start:dev
```

## Run Tests

All tests, mudatation and unit tests will run before the push, but if you want run them in any case follow these commands:

### Unit

```bash
npm test -- --coverage
```

### Mutation

```bash
npx stryker run
```

### E2E

To see the E2E with Cypress, access [this repo](https://github.com/MatheusMFranco/spreadReport).

![Phantom](https://64.media.tumblr.com/77972cf8d91bfd75e520f637f9795098/tumblr_n8qf1jYwcs1r0j0yso1_400.gif)
