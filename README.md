### [fwdmomentum.org](https://fwdmomentum.org)

#### Stack

This monorepo contains a Next.js server-rendered website that speaks to a CMS running Strapi in NodeJS, with the two communicating in GraphQL.

#### Monorepo deployment

Monorepo of frontend and backend, simultaneously deployed to two different Heroku instances using the [`subdir-heroku-buildpack`](https://github.com/timanovsky/subdir-heroku-buildpack) and `heroku/nodejs` buildpacks.

#### Environment variables

For the backend repo:

```
PROJECT_PATH=backend
```

For the frontend repo:

```
PROJECT_PATH=frontend
CMS_URL=https://forward-momentum-api.herokuapp.com
CMS_GRAPHQL_API_URL=https://forward-momentum-api.herokuapp.com/graphql
```
