// merge helper
function mergeHepler(A, B){
    let C = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < A.length && j < B.length){
        if(A[i] < B[j]){
            C[k++] = A[i]
            i++;
        } else {
            C[k++] = B[j];
            j++;
        }
    }
    while(i < A.length) {
        C[k++] = A[i];
        i++;
    }
    while(j < B.length) {
        C[k++] = B[j];
        j++;
    }
    return C;
}


// merge Sort
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    } else {
        let i = 0;
        let j = arr.length;
        let mid = Math.floor((i+j)/2);
        while(i < j){
            let left = mergeSort(arr.slice(i, mid));
            let right = mergeSort(arr.slice(mid));
            return mergeHepler(left, right);
        }
    }
}

console.log(mergeSort([2,8,1,18,13,5,4]));