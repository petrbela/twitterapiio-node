import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import openapiTsConfig from '../openapi-ts.config.mjs';

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

test('package is configured for npm package twitterapiio', () => {
  assert.equal(packageJson.name, 'twitterapiio');
  assert.equal(packageJson.scripts.generate, 'openapi-ts --file openapi-ts.config.mjs');
  assert.equal(packageJson.scripts.prepack, 'npm run generate && npm run build');
});

test('Hey API generation uses the twitterapi.io OpenAPI source', () => {
  assert.equal(openapiTsConfig.input, 'openapi.json');
  assert.equal(openapiTsConfig.output, 'src');
  assert.ok(openapiTsConfig.plugins.includes('@hey-api/client-fetch'));
});
