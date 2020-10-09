function swap(a,b){
    a = a^b; // a = resultant
    b = a^b; // b = a
    a = a^b; // a = b
    return {a,b}
}
console.log(swap(5,7));