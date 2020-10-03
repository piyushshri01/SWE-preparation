// O(n^2) Sol
function findSmallestSubArrThatValGrtrThanGvnValue(arr, val){
    let sum = 0;
    let start = 0;
    let end = 0;
    let count = +Infinity;
    let res = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            sum+= arr[j];
            res++;
            if(sum > val && j-i < count){
                start = i;
                end = j;
                // count = j-i;
                count = res;
            }
        }
        res = 0;
        sum = 0;
    }
    if(count == +Infinity){
        return 'Not Possible'
    }
    return count;
}

console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 4, 45, 6, 0, 19],51));
console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 10, 5, 2, 7], 9));
console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280));
console.log(findSmallestSubArrThatValGrtrThanGvnValue([1, 2, 4], 8));
