# twitterapiio

[![npm version](https://img.shields.io/npm/v/twitterapiio.svg)](https://www.npmjs.com/package/twitterapiio)
[![npm downloads](https://img.shields.io/npm/dm/twitterapiio.svg)](https://www.npmjs.com/package/twitterapiio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js >=22.13.0](https://img.shields.io/node/v/twitterapiio.svg)](https://nodejs.org)

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

## Publishing

Publishing is fully automated via GitHub Actions on `v*` tag pushes. Do **not** run `npm publish` locally.

```bash
npm version patch                    # bumps package.json, commits, creates tag e.g. v0.0.2
git push origin main --follow-tags   # pushes commit + tag → triggers publish.yml
```

The workflow runs `npm ci` → `generate` → `build` → `test` → verifies the tag matches `package.json` version → `npm publish --provenance --access public`, authenticated via OIDC Trusted Publishing (no long-lived secrets required).
