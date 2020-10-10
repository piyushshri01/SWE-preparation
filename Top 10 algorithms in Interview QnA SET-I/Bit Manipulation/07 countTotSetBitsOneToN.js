function countTotSetBitsOneToN(n){
    let countSetBit = 0;
    let count;
    while(n > 0){
        let no = n;
        count = 0;
        while(no > 0){
            count += (no & 1);
            no = no >> 1;
        }
    n--;
    countSetBit += count;    
    }
    return countSetBit;
}

console.log(countTotSetBitsOneToN(3));
console.log(countTotSetBitsOneToN(6));
console.log(countTotSetBitsOneToN(7));
console.log(countTotSetBitsOneToN(8));
