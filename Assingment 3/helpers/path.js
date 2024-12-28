import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const filename = fileURLToPath(import.meta.url);
const rootDir = resolve(dirname(filename), '..');

const helpers = {
  rootDir,   // The root directory of your project
  filename,  // The file name of this module
};

export default helpers;
