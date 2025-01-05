import { fileURLToPath } from 'url';
import path from 'path';

const fileName = fileURLToPath(import.meta.url);
  
const rootDir = path.dirname(path.dirname(fileName)) ; 

export default rootDir;