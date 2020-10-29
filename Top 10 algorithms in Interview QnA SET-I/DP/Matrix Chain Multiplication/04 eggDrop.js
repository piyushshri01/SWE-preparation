function eggDrop(e, f){
    if(f == 0 || f == 1){
        return f;
    }
    if(e == 1){
        return f;
    }
    let min = Infinity;
    for(let i = 1; i <= f; i++){
        let temp = 1 + Math.max(eggDrop(e-1, i-1), eggDrop(e, f-i));
        if(temp < min){
            min = temp;
        }
    }
    return min;
}

console.log(eggDrop(2, 10));