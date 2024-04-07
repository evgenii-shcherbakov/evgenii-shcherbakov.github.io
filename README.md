# evgenii-shcherbakov.github.io
My personal website

### Requirements

- Node.js 18+
- Installed protoc (for development only)
- Installed docker-compose

### Project structure

```shell
.github/
  workflows/ # CI configuration
apps/ # directory for subprojects
  backend/
packages/ # directory for shared between subprojects packages
  common/ # package with common utils, interfaces, types, enums, etc.
  environment/ # environment variables validation & types
  ts-configs/ # shared tsconfig.json files
turbo/
  generators/ # directory with custom code generators
```

### Environment variables

Environment variables should be placed in subproject-specific `.env` files:

```shell
apps/
  packages/
    backend/
      .env # backend environment variables here
```

> Backend
> 
> - `PORT` port for listen REST API requests

### Tech stack

> Project
> 
> - Turborepo

> Backend
> 
> - Nest.js
> - gRPC
> - Mongoose

### Usage

```shell
git clone git@github.com:evgenii-shcherbakov/evgenii-shcherbakov.github.io.git
cd evgenii-shcherbakov.github.io
yarn install # npx yarn
```

Commands for run in development mode

```shell
yarn dev
yarn dev:backend # only backend
```

Commands for build

```shell
yarn build
yarn build:backend # only backend
```

Commands for run in docker

```shell
yarn docker # start all services (production mode)
yarn docker:local # start only transport services (local development mode)
```

Commands for reset build caches:
```shell
yarn reset
yarn reset:backend # only backend
```

For format project with prettier run:
```shell
yarn format
```

### Code generation

For generate new package run:
```shell
yarn gen:package
```
