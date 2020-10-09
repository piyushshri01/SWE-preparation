function findUnique(arr){
    let prevXOR = 0;
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        prevXOR = prevXOR ^ arr[i];
    }

    if(prevXOR&1){
        for(let i = 0; i < arr.length; i++){
            if(arr[i]&1) res = res ^ arr[i];
        }
    } else {
        for(let i = 0; i < arr.length; i++){
            if((arr[i]&1) === 0) res = res ^ arr[i];
        }
    }
    console.log(res);
    console.log(res^prevXOR);
}
let arr = [1,3,5,2,6,1,3,2];
arr = [1,1,2,5,7,2] // 01, 01, 10, 101, 111, 10
console.log(findUnique(arr));