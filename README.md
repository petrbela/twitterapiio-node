# twitterapiio

TypeScript SDK for [twitterapi.io](https://twitterapi.io), generated from the [OpenAPI spec](https://twitterapi.io/openapi.json) using [Hey API](https://heyapi.dev).

## Installation

```bash
npm install twitterapiio
```

Requires Node.js >= 22.13.0.

## Development

Generate the SDK from the pinned OpenAPI spec:

```bash
npm run generate
```

Build distributable files (requires `generate` to have been run first):

```bash
npm run build
```

Prepare package for publishing (runs generation + build):

```bash
npm pack
```

### Updating the OpenAPI spec

The spec is pinned to `openapi.json` in the repo for reproducible builds. To pull the latest version:

```bash
npm run refresh-spec
```

Then re-run `npm run generate` and review the diff before committing.
