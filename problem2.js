function problem2(inventory){
    let last_car;
    inventory.map((value)=>{
        last_car = value;
    })
    return last_car;
}

module.exports = problem2;