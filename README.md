# Nest.js Backend Template

## Getting started

1. Clone this repository and open it

```bash
$ git clone https://github.com/z1-lab/nestjs-backend-template
$ cd nestjs-backend-template
```

2. Install dependencies

```bash
$ yarn
```

3. Create a copy of the `.env.development` file and call it `.env`. Update the environment variables to match your current environment.

```bash
$ cp .env.development .env
```

4. Launch a PostgreSQL database with docker, it will use the port defined in the `DB_PORT` var.

```bash
$ docker-compose up
```

5. Generate the prisma client

```bash
$ yarn prisma generate
```

6. Create the database model

```bash
$ yarn prisma migrate up --experimental
```

7. Launch the dev mode

```bash
$ yarn dev
```

8. If you're going to edit the GraphQL schema, run the following command to regenerate the TypeScript types.

```bash
$ yarn gql:typings --watch
```

## Scripts

- `yarn dev`. Runs the project in dev mode, which means that it won't check types and will restart with every change you make.
- `yarn build`. Compiles the project to the `./dist` folder.
- `yarn typecheck`. Checks the typings of the project. Gets executed before trying to create a new commit but you can also run it manually.
- `yarn start`. Runs the compiled program. Remember to execute `yarn build` before attempting to launch the program.
- `yarn lint`. Runs ESLint. You can append `--fix` in order to fix autofixable issues.
- `yarn gql:typings`. Watches for changes in the GraphQL files and regenerates the `src/graphql.ts` file.
- `yarn test`. Launch the test suite.
- `yarn test:debug`. Launch the test suite in debug mode. You'll need to run all the tests at least one time before trying to set any breakpoint.

## Debugging

You can attach a debugger to the Node.js instance that runs when you're using either `yarn dev` or `yarn test:debug`.

### With VSCode

Place this in your `.vscode/launch.json` file:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach by Process ID",
      "restart": true,
      "processId": "${command:PickProcess}",
      "localRoot": "${workspaceFolder}",
      "remoteRoot": ".",
      "sourceMaps": true,
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```
