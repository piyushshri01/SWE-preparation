function binarySearch(arr,val){
    let start = 0;
    let end = arr.length;
    let mid;
    while(start <= end) {
        mid = Math.floor((start+end)/2);
        if(val == arr[mid]){
            return mid;
        } else if(val > arr[mid]){
            start = mid+1;
        } else {
            end = mid-1;
        }
    }
    return 'Value Does\'nt exists';
}

console.log(binarySearch([2, 3, 4, 10, 40], 10));
console.log(binarySearch([2, 3, 4, 10, 40], 2));
console.log(binarySearch([2, 3, 4, 10, 40], 40));
console.log(binarySearch([2, 3, 4, 10, 40], 5));
