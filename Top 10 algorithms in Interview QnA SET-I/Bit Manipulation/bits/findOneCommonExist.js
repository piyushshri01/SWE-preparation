function findOneCommonExist(arr){
    let i = 0;
    let result = arr[i];
    for(i = 0; i < arr.length-1; i++){
        result = result^arr[i+1];
    }
    return result;
}
console.log(findOneCommonExist([5,2,6,9,2,5,6]));