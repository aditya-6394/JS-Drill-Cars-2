function problem3(inventory){
    let arr = [];
    inventory.map((values)=>{
        arr.push(values.car_model);
    })
    return arr.sort();
}

module.exports = problem3;
