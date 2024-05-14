import largeNumber from "./script2.js";
// const largeNumber = require ('./script2.js')
const a = 10;
const b = 5;

setTimeout(() => {
    console.log(a + b + largeNumber)   
    // console.log(__dirname)
    console.log(a + b + largeNumber)
   }, 3000);

