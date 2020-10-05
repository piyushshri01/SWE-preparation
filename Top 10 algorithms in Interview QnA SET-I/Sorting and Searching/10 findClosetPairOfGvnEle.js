// // O(n^2)
// function findClosetPairOfGvnEle(arr, x){
//     let hashtbl = {};
//     let diff s= +Infinity;
//     let curr;
//     for(let i = 0; i < arr.length-1; i++){
//         for(let j = i+1; j < arr.length; j++){
//             curr = arr[i] + arr[j];
//             if(Math.abs(curr-x) < diff)s{
//                 diff s= Math.abs(curr-x);
//                 hashtbl["i"] = i;
//                 hashtbl["j"] = j;
//             }
//         }
//     }
//     return `${arr[hashtbl["i"]]} and ${arr[hashtbl["j"]]}`;
// }


// O(n)
function findClosetPairOfGvnEle(arr, x){
    let hashTbl = {};
    let diff = +Infinity;
    let start = 0;
    let end = arr.length-1;
    while(start < end) {
        if(Math.abs(arr[start]+arr[end]-x) < diff){
            diff = Math.abs(arr[start]+arr[end]-x);
            hashTbl["start"] = start;
            hashTbl["end"] = end;
        } else if(arr[start]+arr[end] < x){
            start++;
        } else {
            end--;
        }
    }
    return `${arr[hashTbl["start"]]} and ${arr[hashTbl["end"]]}`
}

// // exp. 1
// let arr = [10, 22, 28, 29, 30, 40];
// let x = 54;

// exp. 2
let arr = [1, 3, 4, 7, 10];
let x = 15;

console.log(findClosetPairOfGvnEle(arr, x));