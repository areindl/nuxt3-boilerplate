# Nuxt Application Boilerplate

This is an optioned boilerplate for a Nuxt application to get started quickly.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Modules 

* [Tailwind CSS](https://tailwindcss.com/docs)
* [Shadcn-Vue](https://www.shadcn-vue.com/docs)
* [Nuxt-Icon with Tabler-Icons](https://icones.js.org/collection/tabler)
* [Docker](https://www.docker.com/)

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server via Docker 

Start the development server on `http://localhost:3000` :

```bash
npm run docker:dev
```

Run production build:

```bash
npm run docker:prod
```

## Add a component

To add a new component, run the following command:

```bash
npx shadcn-vue@latest add <component-name>
```

The above command will create a new component in the `components/ui/<component-name>` directory.
