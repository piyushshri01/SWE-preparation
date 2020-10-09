function setIthBitToOne(n, i){
    let res = (n | (1<<i));
    return res;
}
console.log(setIthBitToOne(13, 1));