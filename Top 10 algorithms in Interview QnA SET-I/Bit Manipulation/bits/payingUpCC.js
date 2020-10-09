function filterArr(a, no, k) {
    let i = 0;
    let arr = [];
    let sum = 0;
    while(no > 0){
        (no&1) ? arr.push(a[i]): null;
        i++;
        no = no >> 1;
    }
    if(arr.length > 0){
       for(let j = 0; j < arr.length; j++){
           sum += arr[j];
       }
       if(sum === k){
        console.log(arr, sum);
        }
    }
    

}

// str subsequence
function payingUpCC(arr, k){
    let n = arr.length;
    let range = (1<<n) - 1;
    for(let i = 0; i <= range; i++){
        filterArr(arr, i, k);
    }
}
let str = [10,15,20,25,30];
let k = 65;
payingUpCC(str, k);