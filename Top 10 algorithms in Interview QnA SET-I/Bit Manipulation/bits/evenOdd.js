function evenOdd(n){
    if((n & 1) === 0){
        return `${n} is Even`;
    } else {
        return `${n} is Odd`;
    }
}

console.log(evenOdd(2));
console.log(evenOdd(1));
