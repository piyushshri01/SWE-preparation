// // Recursive Solution
// function isPalindrome(str, i, j){
//     while(i < j){
//         if(str[i] != str[j]){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true;
// }

// function palindromePartioning(str, i, j){
//     if(i >= j){
//         return 0
//     }
//     if(isPalindrome(str, i, j)){
//         return 0
//     }
//     let min = Infinity;
//     for(let k = i; k < j; k++){
//         let temp = 1 + palindromePartioning(str, i, k) + palindromePartioning(str, k+1, j);
//         if(temp < min){
//             min = temp;
//         }
//     }
//     return min;
// }
// let str = "nitin";
// let i = 1;
// let j = str.length-1;
// console.log(palindromePartioning(str, i, j));



// Recursive[optimize bottom up solution]
// palindrome function
function isPalindrome(str, i, j){
    while(i < j){
        if(str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function palindromePartioning(str, i, j, t){
    // base condition
    if(i >= j){
        t[i][j] = 0
        return 0
    }
    // check whether choosing str is palindrome or not
    if(isPalindrome(str, i, j)){
        t[i][j] = 0
        return 0
    }
    // find exist or not
    if(t[i][j] !== -1){
        return t[i][j]
    }
    let min = Infinity;
    for(let k = i; k < j; k++){
        let temp = 1 + palindromePartioning(str, i, k, t) + palindromePartioning(str, k+1, j, t);
        if(temp < min){
            min = temp;
        }
    }
    t[i][j] = min;
    return t[i][j];
}
let str = "abcde" //"zxq";
let i = 0;
let j = str.length-1;
let t = [];
// condition by constraints
for(let p = 0; p < 100; p++){
    t[p] = []
    for(let q = 0; q < 101; q++){
        t[p][q] = -1;
    }
}
console.log(palindromePartioning(str, i, j, t));





