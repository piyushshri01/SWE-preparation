function extractIthBitOfANum(n, i){
    res = (n & (1<<i)) != 0 ? 1 : 0; 
    return res;
}
console.log(extractIthBitOfANum(13, 2));