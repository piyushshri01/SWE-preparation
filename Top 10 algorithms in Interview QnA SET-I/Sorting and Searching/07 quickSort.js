function pivot(arr, i, j){
    let pivot = i;
    let temp;
    do{
        do{
            i++;
        }while(arr[i] < arr[pivot]);
        do{
            j--;
        }while(arr[j] > arr[pivot]);

        if(arr[i] > arr[pivot] && arr[j] < arr[pivot] && i < j){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    } while(i < j)
    temp = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = temp;
    return j;
}
let arr = [18, 2, 5, 3, 1, 19, 23, 4]
// console.log(pivot(arr, 0, arr.length));

// Quick Sort
function quickSort(arr, i, j){
    if(i < j){
        let idx = pivot(arr, i, j);
        quickSort(arr, i, idx);
        quickSort(arr, idx+1, j);
    }
    return arr;
} 
arr = [10, 80, 30, 90, 40, 50, 70]
console.log(quickSort(arr, 0, arr.length));