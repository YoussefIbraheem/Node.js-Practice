import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.dirname(path.dirname(__filename)); // nested dirname to go up two levels

export default rootDir;
