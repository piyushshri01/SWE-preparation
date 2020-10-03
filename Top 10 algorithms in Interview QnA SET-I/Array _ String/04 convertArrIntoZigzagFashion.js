function Zigzag(arr){
    let temp;
    let flag = true;
    for(let i = 0; i < arr.length-1; i++){
        if(flag && arr[i] > arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            flag = false
        } else if (!flag && arr[i] < arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            flag = true
        }else {
            flag = !flag;
        }
    }
    return arr;
}

console.log(Zigzag([4, 3, 7, 8, 6, 2, 1]));
console.log(Zigzag([1, 4, 3, 2]));
