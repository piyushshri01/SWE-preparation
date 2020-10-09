function filterChar(a, no) {
    let i = 0;
    let arr = [];
    while(no > 0){
        (no&1) ? arr.push(a[i]): null;
        i++;
        no = no >> 1;
    }
    if(arr.length > 0){
        // console.log(arr);
        console.log(arr.join(''))
    }
}

// str subsequence
function SubsequenceOfString(str){
    let n = str.length;
    let range = (1<<n) - 1;
    for(let i = 0; i <= range; i++){
        filterChar(str, i);
    }
}
let str = "abc";
SubsequenceOfString(str);