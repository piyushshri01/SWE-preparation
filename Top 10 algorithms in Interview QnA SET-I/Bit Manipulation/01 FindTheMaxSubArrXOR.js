// O(n^2)
function FindTheMaxSubArrXOR(arr){
    let i;
    let j;
    let currXOR;
    let maxXOR = 0;
    for(i = 0; i < arr.length; i++){
        currXOR = 0;
        for(j = i; j < arr.length; j++){
            currXOR = currXOR^arr[j];
            if(currXOR > maxXOR){
                maxXOR = currXOR;
            }
        }
    }
    return maxXOR;
}

console.log(FindTheMaxSubArrXOR([1, 2, 3, 4]));
console.log(FindTheMaxSubArrXOR([8, 1, 2, 12, 7, 6]));
console.log(FindTheMaxSubArrXOR([4, 6]));
console.log(FindTheMaxSubArrXOR([8, 1, 2, 12]));