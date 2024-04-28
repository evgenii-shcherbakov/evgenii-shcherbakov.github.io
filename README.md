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
  admin/
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
  admin/
    .env # admin environment variables here
  backend/
    .env # backend environment variables here
```

> Admin
>
> - `PORT` port for listen http requests
> - `DATABASE_URL` database connection string
> - `PAYLOAD_SECRET` Payload CMS secret

> Backend
> 
> - `PORT` port for listen http requests
> - `DATABASE_URL` database connection string
> - `GRPC_PORT` (optional) port, from which start map gRPC clients ports
> - `PROTOC_PATH` (optional) path to protobuf compiler bin file

### Tech stack

> Project
> 
> - Turborepo

> Admin
>
> - Express
> - Payload CMS

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
yarn dev:admin # only admin
yarn dev:backend # only backend
```

Commands for build

```shell
yarn build
yarn build:admin # only admin
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
yarn reset:admin # only admin
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
