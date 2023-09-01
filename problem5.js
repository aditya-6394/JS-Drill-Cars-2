function problem5(inventory){    
    let cars = inventory.filter((values)=>{
        return values.car_year < 2000;
    })
    return cars;
}

module.exports = problem5;