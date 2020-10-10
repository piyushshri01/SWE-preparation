function FindNextSparseNumber(x){
    let res;
    let prevRes = 0;
    let no = x;
    while(no > 0){
        res = (no & 1);
        if(prevRes & res){
            x = x+1;
            no = x;
        }
        prevRes = res;
        no = (no >> 1);
    }

    return x;
}

console.log(FindNextSparseNumber(6));
console.log(FindNextSparseNumber(4));
console.log(FindNextSparseNumber(38));
console.log(FindNextSparseNumber(44));
