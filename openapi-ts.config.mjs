export default {
  input: 'openapi.json',
  output: 'src',
  plugins: ['@hey-api/client-fetch', '@hey-api/typescript', '@hey-api/sdk'],
};
