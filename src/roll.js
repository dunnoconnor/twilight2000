function roll(count, size){
    let dice = [];
    for (let i = 0; i < count; i++) {
        dice.push(Math.floor(Math.random() * size) + 1);
    }
    return dice;
}

export default roll;