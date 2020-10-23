# Javascript Developer coding challenge


You can find a deployed version of this project at https://e-commerce-catalog.vercel.app/page/1

# Description

## SSG Fast Loading

The code leverages NextJs static site generation (SSG) feature.
The products shown are fetched from a remote endpoint, however pages navigation is extremely fast thanks to the SSG.

## Always up to date (even though pages are statically generated in advance)

Although the catalog is statically generated and pre-built, it remains always synched with its remote source thanks to the revalidation policy. This means that the catalog is revalidate every 10 seconds with no down time. 
You can read more on [NextJS Data Fetching] (https://nextjs.org/docs/basic-features/data-fetching) 

## Test Driven Development

The project has been developed using Test Driven Development (TDD), you can find unit tests for each component

## Reusable components

In developing the components the [BEM] (https://en.bem.info/methodology/quick-start/) methodology has been followed. This ensures a highly scalable and easy maintanable source code.
 
# Development

## Start the server

```shell
npm run build

npm run start
```

## Run in developer mode 

```shell
npm run dev
```