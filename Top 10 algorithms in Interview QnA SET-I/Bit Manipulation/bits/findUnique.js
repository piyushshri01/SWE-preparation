function findUnique(arr){
    let resXOR = 0;
    for(let i = 0; i < arr.length; i++){
        resXOR = resXOR ^ arr[i];
    }

    let j = 0;
    let temp = resXOR;
    while(temp > 0){
        if(temp&1){
            break;
        }
        j++;
        temp = temp>>1;
    }

    let mask = (1 << j);
    let firstNo = 0;
    for(let i = 0; i < arr.length; i++) {
        if((mask & arr[i]) != 0){
            firstNo = firstNo^arr[i]
        }
    }
    let secondNo = resXOR^firstNo;
    console.log(firstNo, secondNo);
}
let arr = [1,3,5,2,6,1,3,2];
arr = [1,1,2,5,7,2] // 01, 01, 10, 101, 111, 10
findUnique(arr);