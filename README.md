<div align="center">

# Genus Teach Post

![GitHub Tag](https://img.shields.io/github/v/tag/matheusmfranco/genus-teach-post) ![](https://img.shields.io/badge/Framework-react-brightgreen) [![Basic validation](https://github.com/actions/labeler/actions/workflows/basic-validation.yml/badge.svg?branch=main)](https://github.com/actions/labeler/actions/workflows/basic-validation.yml)

A simple React application built with TypeScript that generates random programming quotes.

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

- **React**: JavaScript library for building user interfaces;
- **TypeScript**: Type-safe JavaScript with enhanced productivity and readability;
- **LESS**: CSS pre-processor styling for an appealing design;
- **Jest**: Framework that enables the creation of unit tests;
- **Stryker**: Mutation testing tool that helps improve code quality.

## Local

```bash
npm install
npm start
```

## Docker

```bash
docker run -p 3000:80 matheusmagal/genus-teach-post
```

## Run Mock

```bash
npx json-server --watch db.json --port 4000
```

And in another terminal:

```bash
npm run start:dev
```

## Run Tests

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
