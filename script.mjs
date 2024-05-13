import path from 'path'
import { largeNumber } from "./script2.mjs";

const a = largeNumber;

setTimeout(() => {
  console.log(a);
  console.log(__dirname);
}, 3000);
