function problem4(inventory){
    let years = [];
    inventory.map((values)=>{
        years.push(values.car_year);
    })
    return years;
}

module.exports = problem4;
