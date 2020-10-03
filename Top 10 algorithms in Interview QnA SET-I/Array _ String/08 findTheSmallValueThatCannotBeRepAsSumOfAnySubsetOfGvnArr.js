function findTheSmallValueThatCannotBeRepAsSumOfAnySubsetOfGvnArr(arr){
    let res = 1;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] <= res) res = res + arr[i];
        else break;
    }       
    return res 
}

console.log(findTheSmallValueThatCannotBeRepAsSumOfAnySubsetOfGvnArr([1, 3, 6, 10, 11, 15]));
console.log(findTheSmallValueThatCannotBeRepAsSumOfAnySubsetOfGvnArr([1, 1, 1, 1]));

console.log(findTheSmallValueThatCannotBeRepAsSumOfAnySubsetOfGvnArr([1, 1, 3, 4]));
console.log(findTheSmallValueThatCannotBeRepAsSumOfAnySubsetOfGvnArr([1, 2, 5, 10, 20, 40]));
console.log(findTheSmallValueThatCannotBeRepAsSumOfAnySubsetOfGvnArr([1, 2, 3, 4, 5, 6]));