// function countTripleteWithSumSmallerThanGvnSum(arr, sum){
//     let i , j , k, tot;
//     let count = 0;
//     for(i = 0; i <= arr.length-3; i++){
//         for(j = i+1; j <= arr.length-2; j++){
//             for(k = j+1; k <= arr.length-1; k++){
//                 tot = arr[i] + arr[j] + arr[k];
//                 if(tot < sum){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }
// console.log(countTripleteWithSumSmallerThanGvnSum([-2, 0, 1, 3], 2));

// console.log(countTripleteWithSumSmallerThanGvnSum([5, 1, 3, 4, 7], 12));


function countTripleteWithSumSmallerThanGvnSum(array, sum){
    let arr = array.sort(); // [1, 3, 4, 5, 7]
    let i , j , k, tot;
    let count = 0;
    for(i = 0; i < arr.length-2; i++){
        j = i+1;
        k = arr.length-1;
        while(j < k){
            tot = arr[i] + arr[j] + arr[k]
            if(sum <= tot){
                k = k-1;
            } else {
                count += (k-j);
                j = j+1;
            }
        }
    }
    return count;
}
console.log(countTripleteWithSumSmallerThanGvnSum([-2, 0, 1, 3], 2));

console.log(countTripleteWithSumSmallerThanGvnSum([5, 1, 3, 4, 7], 12));
