// @ts-check
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  target: 'node',
  devtool: 'source-map',
  entry: {
    server: './lib/server/server.js',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
};
