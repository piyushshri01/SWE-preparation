// get Idx in sorted roted arr
function isExists(arr, i, j){
    let mid = Math.floor((i+j)/2)
    if(arr[mid] === key){
        return mid;
    } else if(arr[mid] > key){
        return serachElement(arr, i, mid, key)
    } else {
        return serachElement(arr, mid, j, key)
    }
}

// search element
function serachElement(arr, start, end, key){
    for(let i = start; i < end; i++){
        if(arr[i] === key){
            return i;
        }
    }
    return -1;
}

// // exp. 1
// let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
// let key = 3;

// // exp. 2
// let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
// let key = 30;

// exp. 3
let arr = [30, 40, 50, 10, 20];
let key = 10;

console.log(serachElement(arr,0, arr.length, key));
