function bubbleSort(arr){
    let flag = false;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if(!flag) {
            return arr;
        }
        console.log(arr);
    }
    return arr;
}
console.log(bubbleSort([2,8,1,18,13,5,4]));
console.log(bubbleSort([1,2,3,4,5]));
