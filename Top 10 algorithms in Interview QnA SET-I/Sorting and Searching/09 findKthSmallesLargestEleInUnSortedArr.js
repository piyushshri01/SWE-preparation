function findKthSmallestLargestEleInUnSortedArr(arr, k){
    arr.sort((a, b) => a - b);
    return arr[k-1]
}

// // exp. 1
// let arr = [7, 10, 4, 3, 20, 15];
// let k = 3;

// exp. 2
let arr = [7, 10, 4, 3, 20, 15];
let k = 4;
console.log(findKthSmallestLargestEleInUnSortedArr(arr, k));