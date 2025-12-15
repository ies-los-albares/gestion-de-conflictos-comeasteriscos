import { argv } from "node:process";

const argc = argv.length - 2;
const args = argv.slice(2);

console.log(`Has escrito ${argc} parámetros:`);
args.forEach((arg, index) => {
  console.log(`${index}: ${arg}`);
});
