let obj = require('../problem1');
let problem2 = require('../problem2');
const inventory = obj.inventory;
let details = problem2(inventory);
console.log(`Last car is a ${details.car_make} ${details.car_model}`);