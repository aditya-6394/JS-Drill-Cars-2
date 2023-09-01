function problem6(inventory){
    let arr = inventory.filter((values)=>{
        return values.car_make == "BMW" || values.car_make == "Audi";
    })
    return arr;
}

module.exports = problem6;