function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        for(let j = i; arr[j] < arr[j-1] && j > 0; j--){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
        console.log(arr);
    }
    return arr;
}

// console.log(insertionSort([2,8,1,18,13,5,4]));
console.log(insertionSort([4,3,2,10,12,1,5,6]));