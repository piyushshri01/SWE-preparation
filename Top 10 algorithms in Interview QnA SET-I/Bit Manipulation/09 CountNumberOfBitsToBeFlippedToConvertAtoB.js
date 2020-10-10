function CountNumberOfBitsToBeFlippedToConvertAtoB(a, b){
    let resXOR = a^b;
    return setBit(resXOR);
}

// Helper function find setbit
function setBit(n){
    let count = 0;
    while(n > 0){
        count += (n & 1); 
        n = n >> 1;
    }
    return count;
}

console.log(CountNumberOfBitsToBeFlippedToConvertAtoB(10, 20));
console.log(CountNumberOfBitsToBeFlippedToConvertAtoB(7, 10));
