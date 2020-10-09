function makeIthBitZero(n, i){
    // return n^(1<<i);
    return n & ~(1<<i);
}
console.log(makeIthBitZero(13, 3));
console.log(makeIthBitZero(13, 2));
